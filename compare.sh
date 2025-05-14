#!/bin/bash

# Check if directory argument is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <directory>"
    echo "Example: $0 erc721"
    exit 1
fi

TARGET_DIR="$1"

# Check if directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory '$TARGET_DIR' does not exist"
    exit 1
fi

# Check if foundry.toml exists in the target directory
if [ ! -f "$TARGET_DIR/foundry.toml" ]; then
    echo "Error: No foundry.toml found in '$TARGET_DIR'"
    exit 1
fi

# Create reports directory structure
REPORTS_DIR="reports/$TARGET_DIR"
mkdir -p "$REPORTS_DIR"

# Change to target directory
cd "$TARGET_DIR" || exit 1

# Set default solc version
DEFAULT_SOLC="0.8.28"

# Read solc version from foundry.toml with debug info
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

# Read solx version from foundry.toml (extract version number from the path)
SOLX_VERSION=$(grep 'solc_version.*solx.*' foundry.toml | sed -n 's/.*solx-.*-v\([0-9].*\)"/\1/p')
if [ -z "$SOLX_VERSION" ]; then
    echo "Error: No solx version found in foundry.toml"
    exit 1
fi
echo "Found solx version: $SOLX_VERSION"

# Read compiler settings from foundry.toml
echo "Reading compiler settings..."
OPTIMIZER=$(grep -E '^[[:space:]]*optimizer[[:space:]]*=' foundry.toml | head -n 1 | sed 's/.*=\s*\([^#]*\).*/\1/' | tr -d '[:space:]')
OPTIMIZER_RUNS=$(grep -E '^[[:space:]]*optimizer_runs[[:space:]]*=' foundry.toml | head -n 1 | sed 's/.*=\s*\([^#]*\).*/\1/' | tr -d '[:space:]')
VIA_IR=$(grep -E '^[[:space:]]*via_ir[[:space:]]*=' foundry.toml | head -n 1 | sed 's/.*=\s*\([^#]*\).*/\1/' | tr -d '[:space:]')

# Set default values if not found
OPTIMIZER=${OPTIMIZER:-true}
OPTIMIZER_RUNS=${OPTIMIZER_RUNS:-200}
VIA_IR=${VIA_IR:-false}

echo "Compiler settings:"
echo "  - optimizer: $OPTIMIZER"
echo "  - optimizer_runs: $OPTIMIZER_RUNS"
echo "  - via_ir: $VIA_IR"
echo

echo "Preparing comparison between:"
echo "  - solc v${SOLC_VERSION}"
echo "  - solx v${SOLX_VERSION}"
echo

# Generate filenames with versions
if [ "$VIA_IR" = "true" ]; then
    SOLC_REPORT="../$REPORTS_DIR/gas-report-solc-${SOLC_VERSION}-via-ir.json"
else
    SOLC_REPORT="../$REPORTS_DIR/gas-report-solc-${SOLC_VERSION}.json"
fi
SOLX_REPORT="../$REPORTS_DIR/gas-report-solx-${SOLX_VERSION}.json"

echo "Will generate files in reports/$TARGET_DIR/:"
echo "  - Solc report: $(basename "$SOLC_REPORT")"
echo "  - Solx report: $(basename "$SOLX_REPORT")"
echo

# Clean up in case of previous runs
forge clean
rm -f "$SOLC_REPORT" "$SOLX_REPORT"

# Clean optimizer_runs value by removing underscores
OPTIMIZER_RUNS_CLEAN=$(echo "$OPTIMIZER_RUNS" | tr -d '_')

# Run tests with solc and generate gas report
echo "Running solc gas report..."
if ! forge test --gas-report --json > "$SOLC_REPORT"; then
    echo "Error: Failed to run forge test for solc"
    exit 1
fi

# Create a temporary file with the compiler settings
TMP_SETTINGS=$(mktemp)
echo '[{
    "compilerSettings": {
        "optimizer": '"$OPTIMIZER"',
        "optimizer_runs": '"$OPTIMIZER_RUNS_CLEAN"',
        "via_ir": '"$VIA_IR"'
    }
},' > "$TMP_SETTINGS"

# Read the original file content (skipping the first [)
tail -c +2 "$SOLC_REPORT" > "$SOLC_REPORT.tmp"

# Combine the files
cat "$TMP_SETTINGS" "$SOLC_REPORT.tmp" > "$SOLC_REPORT"
rm "$TMP_SETTINGS" "$SOLC_REPORT.tmp"

# Clean up
forge clean

# Run tests with solx and generate gas report
echo "Running solx gas report..."
if ! FOUNDRY_PROFILE=solx forge test --gas-report --json > "$SOLX_REPORT"; then
    echo "Error: Failed to run forge test for solx"
    exit 1
fi

# Create a temporary file with the compiler settings
TMP_SETTINGS=$(mktemp)
echo '[{
    "compilerSettings": {}
},' > "$TMP_SETTINGS"

# Read the original file content (skipping the first [)
tail -c +2 "$SOLX_REPORT" > "$SOLX_REPORT.tmp"

# Combine the files
cat "$TMP_SETTINGS" "$SOLX_REPORT.tmp" > "$SOLX_REPORT"
rm "$TMP_SETTINGS" "$SOLX_REPORT.tmp"

echo
echo "Generated files in reports/$TARGET_DIR/:"
echo "  Solc report: $(basename "$SOLC_REPORT")"
echo "  Solx report: $(basename "$SOLX_REPORT")" 
