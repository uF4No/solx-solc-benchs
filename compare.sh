#!/bin/bash

# Store the root directory
ROOT_DIR="$(pwd)"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is required but not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Function to print usage
print_usage() {
    echo "Usage: $0 [-project PATH] [directory]"
    echo
    echo "Options:"
    echo "  -project PATH    Compare a project at the specified path"
    echo "  directory        Compare a project in the current repository"
    echo
    echo "Examples:"
    echo "  $0 erc721                          # Compare erc721 project in this repo"
    echo "  $0 -project ../my-other-project    # Compare project at ../my-other-project"
}

# Parse arguments
PROJECT_PATH=""
TARGET_DIR=""

while [[ $# -gt 0 ]]; do
    case $1 in
        -project)
            if [ -z "$2" ]; then
                echo "Error: -project requires a path argument"
                print_usage
                exit 1
            fi
            PROJECT_PATH="$2"
            shift 2
            ;;
        -h|--help)
            print_usage
            exit 0
            ;;
        *)
            if [ -z "$TARGET_DIR" ]; then
                TARGET_DIR="$1"
            else
                echo "Error: Too many arguments"
                print_usage
                exit 1
            fi
            shift
            ;;
    esac
done

# If neither project path nor target directory is provided
if [ -z "$PROJECT_PATH" ] && [ -z "$TARGET_DIR" ]; then
    echo "Error: No project specified"
    print_usage
    exit 1
fi

# If both project path and target directory are provided
if [ -n "$PROJECT_PATH" ] && [ -n "$TARGET_DIR" ]; then
    echo "Error: Cannot specify both -project and directory"
    print_usage
    exit 1
fi

# Function to validate and get project path
get_project_path() {
    local path=$1
    # Convert to absolute path if relative
    if [[ ! "$path" = /* ]]; then
        path="$ROOT_DIR/$path"
    fi
    
    # Check if directory exists
    if [ ! -d "$path" ]; then
        echo "Error: Directory '$path' does not exist"
        exit 1
    fi
    
    # Check if foundry.toml exists
    if [ ! -f "$path/foundry.toml" ]; then
        echo "Error: No foundry.toml found in '$path'"
        exit 1
    fi
    
    echo "$path"
}

# Set the project directory based on input
if [ -n "$PROJECT_PATH" ]; then
    PROJECT_DIR=$(get_project_path "$PROJECT_PATH")
    # For external projects, use the last directory name as TARGET_DIR
    TARGET_DIR=$(basename "$PROJECT_DIR")
else
    PROJECT_DIR=$(get_project_path "$TARGET_DIR")
fi

# Create reports directory structure
REPORTS_DIR="$ROOT_DIR/reports/$TARGET_DIR"
mkdir -p "$REPORTS_DIR"

# Change to project directory
cd "$PROJECT_DIR" || exit 1

# Set default solc version
DEFAULT_SOLC="0.8.28"

# Read solc version from foundry.toml
echo "Reading foundry.toml for solc version..."
FOUNDRY_CONTENT=$(cat foundry.toml)
echo "foundry.toml content:"
echo "$FOUNDRY_CONTENT"
echo

# Try different patterns for solc version
# First try 'solc ='
SOLC_VERSION=$(grep -E '^[[:space:]]*solc[[:space:]]*=' foundry.toml | head -n 1 | sed 's/.*"\([^"]*\)".*/\1/')

# If not found, try 'solc_version =' but exclude the solx line
if [ -z "$SOLC_VERSION" ]; then
    SOLC_VERSION=$(grep -E '^[[:space:]]*solc_version[[:space:]]*=' foundry.toml | grep -v 'solx' | head -n 1 | sed 's/.*"\([^"]*\)".*/\1/')
fi

# If still not found, use default
if [ -z "$SOLC_VERSION" ]; then
    SOLC_VERSION="$DEFAULT_SOLC"
    echo "No solc version found in foundry.toml, using default: $DEFAULT_SOLC"
else
    echo "Found solc version: $SOLC_VERSION"
fi

# Check for solx binary
SOLX_BINARY=$(find "$ROOT_DIR/binaries-solx" -type f -name "solx-*" | grep -E 'solx-(linux|macosx|windows).*v[0-9]+\.[0-9]+\.[0-9]+.*' | head -n 1)
if [ ! -f "$SOLX_BINARY" ]; then
    echo "🛑 Error: solx binary not found in ./binaries-solx/"
    echo "Please download it from https://github.com/matter-labs/solx/releases"
    echo "and place it in the binaries-solx directory"
    echo
    echo "Supported binary names:"
    echo "  - solx-linux-amd64-gnu-v*.*.* (Linux AMD64)"
    echo "  - solx-linux-arm64-gnu-v*.*.* (Linux ARM64)"
    echo "  - solx-macosx-v*.*.*         (macOS)"
    echo "  - solx-windows-amd64-gnu-v*.*.*.exe (Windows)"
    exit 1
fi

# Make sure the binary is executable (except on Windows)
if [[ ! "$SOLX_BINARY" =~ \.exe$ ]]; then
    chmod +x "$SOLX_BINARY"
fi

# Extract solx version from binary name
SOLX_VERSION=$(basename "$SOLX_BINARY" | sed -n 's/.*-v\([0-9].*\)/\1/p')
if [ -z "$SOLX_VERSION" ]; then
    echo "Error: Could not determine solx version from binary name"
    exit 1
fi
echo "Found solx version: $SOLX_VERSION"

echo "Preparing comparisons:"
echo "1. solc v${SOLC_VERSION} with optimizer"
echo "2. solc v${SOLC_VERSION} with optimizer + via-ir"
echo "3. solx v${SOLX_VERSION} default"
echo "4. solx v${SOLX_VERSION} with via-ir"
echo

# Generate report filenames
SOLC_REPORT="$REPORTS_DIR/gas-report-solc-${SOLC_VERSION}-opt.json"
SOLC_IR_REPORT="$REPORTS_DIR/gas-report-solc-${SOLC_VERSION}-opt-via-ir.json"
SOLX_REPORT="$REPORTS_DIR/gas-report-solx-${SOLX_VERSION}.json"
SOLX_IR_REPORT="$REPORTS_DIR/gas-report-solx-${SOLX_VERSION}-via-ir.json"

echo "Will generate files in reports/$TARGET_DIR/:"
echo "  - $(basename "$SOLC_REPORT")"
echo "  - $(basename "$SOLC_IR_REPORT")"
echo "  - $(basename "$SOLX_REPORT")"
echo "  - $(basename "$SOLX_IR_REPORT")"
echo

# Clean up in case of previous runs
forge clean
rm -f "$SOLC_REPORT" "$SOLC_IR_REPORT" "$SOLX_REPORT" "$SOLX_IR_REPORT"

# Function to create compiler settings JSON
create_settings_json() {
    local optimizer=$1
    local optimizer_runs=$2
    local via_ir=$3
    echo '[{
    "compilerSettings": {
        "optimizer": '"$optimizer"',
        "optimizer_runs": '"$optimizer_runs"',
        "via_ir": '"$via_ir"'
    }
},'
}

# Function to run test and generate report
run_test() {
    local output_file=$1
    local profile=$2
    local via_ir=$3
    local settings_json=$4
    
    echo "Running tests for $(basename "$output_file")..."
    
    local cmd="forge test --gas-report --json"
    if [ -n "$profile" ]; then
        cmd="FOUNDRY_PROFILE=$profile $cmd"
    fi
    if [ "$via_ir" = "true" ]; then
        cmd="$cmd --via-ir"
    fi
    
    if ! eval "$cmd > $output_file.tmp"; then
        echo "Error: Failed to run forge test"
        return 1
    fi
    
    # Create a temporary file with the compiler settings
    local tmp_settings=$(mktemp)
    echo "$settings_json" > "$tmp_settings"
    
    # Read the original file content (skipping the first [)
    tail -c +2 "$output_file.tmp" > "$output_file.tmp2"
    
    # Combine the files
    cat "$tmp_settings" "$output_file.tmp2" > "$output_file"
    rm "$tmp_settings" "$output_file.tmp" "$output_file.tmp2"
    
    forge clean
    return 0
}

# 1. Run solc with optimizer
settings_json=$(create_settings_json true 200 false)
if ! run_test "$SOLC_REPORT" "" false "$settings_json"; then
    exit 1
fi

# 2. Run solc with optimizer + via-ir
settings_json=$(create_settings_json true 200 true)
if ! run_test "$SOLC_IR_REPORT" "" true "$settings_json"; then
    exit 1
fi

# Create temporary solx profile in foundry.toml if it doesn't exist
if ! grep -q '\[profile\.solx\]' foundry.toml; then
    echo -e "\n[profile.solx]\nsolc_version = \"$SOLX_BINARY\"" >> foundry.toml
fi

# 3. Run solx default
settings_json=$(create_settings_json false 0 false)
if ! run_test "$SOLX_REPORT" "solx" false "$settings_json"; then
    exit 1
fi

# 4. Run solx with via-ir
settings_json=$(create_settings_json false 0 true)
if ! run_test "$SOLX_IR_REPORT" "solx" true "$settings_json"; then
    exit 1
fi

echo
echo "Generated files in reports/$TARGET_DIR/:"
echo "  - $(basename "$SOLC_REPORT")"
echo "  - $(basename "$SOLC_IR_REPORT")"
echo "  - $(basename "$SOLX_REPORT")"
echo "  - $(basename "$SOLX_IR_REPORT")"

# Return to the root directory
cd "$ROOT_DIR" || exit 1

# Build the dashboard
echo
echo "Building the dashboard..."
if [ ! -f "dashboard/build.js" ]; then
    echo "Error: dashboard/build.js not found"
    echo "Please make sure you're running this script from the repository root"
    exit 1
fi

cd dashboard || exit 1
if ! node build.js; then
    echo "Error: Failed to build the dashboard"
    cd "$ROOT_DIR" || exit 1
    exit 1
fi
cd "$ROOT_DIR" || exit 1

echo
echo "✨ Done! You can now view the results by:"
echo "1. Opening dashboard/index.html in your browser"
echo "2. Selecting '$TARGET_DIR' from the dropdown" 
