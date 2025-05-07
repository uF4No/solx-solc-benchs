#!/bin/bash

# Read solc version from foundry.toml
SOLC_VERSION=$(grep '^solc = ' foundry.toml | sed 's/solc = "\(.*\)"/\1/')
echo "Using solc version: $SOLC_VERSION"

# Read solx version from foundry.toml (extract v0.1.0-alpha.2 from the path)
SOLX_VERSION=$(grep 'solc_version.*solx.*' foundry.toml | sed -n 's/.*solx-.*-v\([0-9].*\)"/\1/p')
echo "Using solx version: $SOLX_VERSION"

# Generate filenames with versions
SOLC_SNAP="gas-snap-solc-${SOLC_VERSION}.map"
SOLX_SNAP="gas-snap-solx-${SOLX_VERSION}.map"
DIFF_OUTPUT="gas-diff-solc${SOLC_VERSION}-vs-solx${SOLX_VERSION}.txt"

# Clean up in case of previous runs
forge clean
rm -f "$SOLC_SNAP" "$SOLX_SNAP" "$DIFF_OUTPUT"

# Compile with solc and save output to a file
forge snapshot --snap "./$SOLC_SNAP"

# Clean up
forge clean

# Compile and test with solx and save output to a file
# Show output in real-time and save only the diff part to file
FOUNDRY_PROFILE=solx forge snapshot --diff "./$SOLC_SNAP" 2>&1 | tee >(sed -n '/^Ran/,$p' > "$DIFF_OUTPUT")

echo "Generated files:"
echo "  Solc snapshot: $SOLC_SNAP"
echo "  Solx snapshot: $SOLX_SNAP"
echo "  Diff output: $DIFF_OUTPUT"
