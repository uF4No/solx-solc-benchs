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

echo "Preparing comparison between:"
echo "  - solc v${SOLC_VERSION}"
echo "  - solx v${SOLX_VERSION}"
echo

# Generate filenames with versions
SOLC_REPORT="../$REPORTS_DIR/gas-report-solc-${SOLC_VERSION}.json"
SOLX_REPORT="../$REPORTS_DIR/gas-report-solx-${SOLX_VERSION}.json"

echo "Will generate files in reports/$TARGET_DIR/:"
echo "  - Solc report: $(basename "$SOLC_REPORT")"
echo "  - Solx report: $(basename "$SOLX_REPORT")"
echo

# Clean up in case of previous runs
forge clean
rm -f "$SOLC_REPORT" "$SOLX_REPORT"

# Run tests with solc and generate gas report
echo "Running solc gas report..."
forge test --gas-report --json > "$SOLC_REPORT"

# Clean up
forge clean

# Run tests with solx and generate gas report
echo "Running solx gas report..."
FOUNDRY_PROFILE=solx forge test --gas-report --json > "$SOLX_REPORT"

echo
echo "Generated files in reports/$TARGET_DIR/:"
echo "  Solc report: $(basename "$SOLC_REPORT")"
echo "  Solx report: $(basename "$SOLX_REPORT")" 
