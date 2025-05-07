#!/bin/bash

# Clean up in case of previous runs
forge clean
rm -f gas-report-solc.json gas-report-solx.json gas-comparison.md gas-comparison-detailed.md

# Compile with solc and save output to a file
forge test --gas-report --json > gas-report-solc.json 2>&1

# Clean up
forge clean

# Compile and test with solx and save output to a file
FOUNDRY_PROFILE=solx forge test --gas-report --json > gas-report-solx.json 2>&1

# Generate a comparison table
echo "Generating gas usage comparison table..."
echo "| Contract/Function | solc gas | solx gas | Difference | % Change |" > gas-comparison.md
echo "|------------------|-----------|----------|------------|----------|" >> gas-comparison.md

# Function to calculate percentage change
calc_percent() {
    local solc=$1
    local solx=$2
    local diff=$((solc - solx))
    if [ "$solc" -ne 0 ]; then
        # When solx uses less gas (diff is positive), show negative percentage
        local percent=$(echo "scale=2; (-1 * $diff * 100) / $solc" | bc)
        echo "$percent"
    else
        echo "N/A"
    fi
}

# Function to extract value from JSON using grep and sed
extract_json_value() {
    local file=$1
    local key=$2
    grep -o "\"$key\":[0-9]*" "$file" | sed 's/.*://'
}

# Function to extract function metrics
extract_function_metrics() {
    local file=$1
    local func=$2
    local metric=$3
    grep -o "\"$func\":{[^}]*}" "$file" | grep -o "\"$metric\":[0-9]*" | sed 's/.*://'
}

# Process the gas reports
process_reports() {
    local solc_file="gas-report-solc.json"
    local solx_file="gas-report-solx.json"
    
    # Extract deployment costs
    local solc_deploy=$(extract_json_value "$solc_file" "gas")
    local solx_deploy=$(extract_json_value "$solx_file" "gas")
    
    # Compare deployment costs
    local deploy_diff=$((solc_deploy - solx_deploy))
    local deploy_percent=$(calc_percent "$solc_deploy" "$solx_deploy")
    echo "| Deployment Cost | $solc_deploy | $solx_deploy | $deploy_diff | ${deploy_percent}% |" >> gas-comparison.md
    
    # Get function names (they appear between quotes and end with parentheses)
    local functions=$(grep -o '"[^"]*()' "$solc_file" | sort -u | sed 's/"//g')
    
    # Process each function
    while IFS= read -r func; do
        # Format function name (remove the parentheses)
        local func_name=$(echo "$func" | sed 's/()$//')
        
        # Extract metrics for solc
        local solc_min=$(extract_function_metrics "$solc_file" "$func" "min")
        local solc_mean=$(extract_function_metrics "$solc_file" "$func" "mean")
        local solc_median=$(extract_function_metrics "$solc_file" "$func" "median")
        local solc_max=$(extract_function_metrics "$solc_file" "$func" "max")
        
        # Extract metrics for solx
        local solx_min=$(extract_function_metrics "$solx_file" "$func" "min")
        local solx_mean=$(extract_function_metrics "$solx_file" "$func" "mean")
        local solx_median=$(extract_function_metrics "$solx_file" "$func" "median")
        local solx_max=$(extract_function_metrics "$solx_file" "$func" "max")
        
        # Calculate differences and percentages for median values
        local diff=$((solc_median - solx_median))
        local percent=$(calc_percent "$solc_median" "$solx_median")
        
        echo "| $func_name | $solc_median | $solx_median | $diff | ${percent}% |" >> gas-comparison.md
        
        # Add detailed stats
        echo "### $func_name" >> gas-comparison-detailed.md
        echo "| Metric | solc | solx | Difference | % Change |" >> gas-comparison-detailed.md
        echo "|--------|------|------|------------|----------|" >> gas-comparison-detailed.md
        
        # Min
        local min_diff=$((solc_min - solx_min))
        local min_percent=$(calc_percent "$solc_min" "$solx_min")
        echo "| Min | $solc_min | $solx_min | $min_diff | ${min_percent}% |" >> gas-comparison-detailed.md
        
        # Mean
        local mean_diff=$((solc_mean - solx_mean))
        local mean_percent=$(calc_percent "$solc_mean" "$solx_mean")
        echo "| Mean | $solc_mean | $solx_mean | $mean_diff | ${mean_percent}% |" >> gas-comparison-detailed.md
        
        # Median
        echo "| Median | $solc_median | $solx_median | $diff | ${percent}% |" >> gas-comparison-detailed.md
        
        # Max
        local max_diff=$((solc_max - solx_max))
        local max_percent=$(calc_percent "$solc_max" "$solx_max")
        echo "| Max | $solc_max | $solx_max | $max_diff | ${max_percent}% |" >> gas-comparison-detailed.md
        echo "" >> gas-comparison-detailed.md
    done <<< "$functions"
}

# Run the comparison
process_reports

echo "Comparison table generated in gas-comparison.md"
echo "Detailed comparison generated in gas-comparison-detailed.md"

# Display the tables
echo "Gas Usage Comparison (solc vs solx):"
cat gas-comparison.md
echo -e "\nDetailed Gas Usage Comparison:"
cat gas-comparison-detailed.md
