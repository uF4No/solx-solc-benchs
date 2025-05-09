// Function to show loading state
function showLoading() {
    document.getElementById('loading').classList.add('active');
    document.getElementById('error').classList.remove('active');
}

// Function to hide loading state
function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}

// Function to show error message
function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.classList.add('active');
    hideLoading();
}

// Function to read the gas report data
function readGasReports(projectName) {
    try {
        const projectData = REPORTS_DATA[projectName];
        if (!projectData) {
            throw new Error(`No data available for project: ${projectName}`);
        }
        return {
            solcData: projectData.solc,
            solxData: projectData.solx
        };
    } catch (error) {
        showError(`Error reading gas reports: ${error.message}`);
        console.error('Error reading gas reports:', error);
        return null;
    }
}

// Color schemes for different compiler versions
const colorSchemes = {
    solc: {
        base: '#9C27B0', // Original purple
        getColor: (index, total) => {
            const baseHue = 291; // Purple hue
            const saturation = 76; // Fixed saturation
            // Adjust lightness from 45% to 65% based on index
            const lightness = 45 + (index * 10);
            return `hsl(${baseHue}, ${saturation}%, ${lightness}%)`;
        },
        getBorderColor: (color) => {
            // Extract HSL values from the color string
            const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
            if (!match) return color;
            const [, h, s, l] = match;
            // Return a darker version of the same color
            return `hsl(${h}, ${s}%, ${Math.max(20, parseInt(l) - 10)}%)`;
        }
    },
    solx: {
        base: '#2196F3', // Base blue
        getColor: (index, total) => {
            const baseHue = 207; // Blue hue
            const saturation = 90; // Fixed saturation
            // Adjust lightness from 45% to 65% based on index
            const lightness = 45 + (index * 10);
            return `hsl(${baseHue}, ${saturation}%, ${lightness}%)`;
        },
        getBorderColor: (color) => {
            // Extract HSL values from the color string
            const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
            if (!match) return color;
            const [, h, s, l] = match;
            // Return a darker version of the same color
            return `hsl(${h}, ${s}%, ${Math.max(20, parseInt(l) - 10)}%)`;
        }
    }
};

// Helper functions for color manipulation
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHsl(rgb) {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

// Function to calculate gas differences for a single contract
function calculateContractDiff(contractData) {
    const results = [];
    let totalGasChange = 0;
    let methodCount = 0;

    // Group data by function name across all compiler versions
    const functionData = {};
    
    contractData.forEach(version => {
        Object.entries(version.functions).forEach(([funcName, data]) => {
            if (!functionData[funcName]) {
                functionData[funcName] = [];
            }
            functionData[funcName].push({
                compiler: version.compiler,
                gas: data.mean
            });
        });
    });

    // Calculate differences for each function
    Object.entries(functionData).forEach(([funcName, versions]) => {
        results.push({
            name: funcName,
            versions: versions
        });
        methodCount++;
    });

    // Get deployment info for all versions
    const deploymentInfo = contractData.map(version => ({
        compiler: version.compiler,
        gas: version.deployment.gas
    }));

    return {
        results,
        deployment: deploymentInfo,
        methodCount,
        contractName: contractData[0].contract
    };
}

// Function to calculate gas differences
function calculateGasDiff(solcData, solxData) {
    if (!solcData || !solxData) {
        showError('Invalid compiler data provided');
        return [];
    }

    // Group contracts by their name
    const contractGroups = {};
    
    [...solcData, ...solxData].forEach(contract => {
        if (!contractGroups[contract.contract]) {
            contractGroups[contract.contract] = [];
        }
        contractGroups[contract.contract].push(contract);
    });

    // Process each contract group
    return Object.values(contractGroups).map(contractData => 
        calculateContractDiff(contractData)
    );
}

let charts = [];

// Function to create a chart container
function createChartContainer(contractName, index) {
    const container = document.createElement('div');
    container.className = 'contract-section';
    container.innerHTML = `
        <h3>${contractName}</h3>
        <div class="chart-container">
            <canvas id="gasChart${index}"></canvas>
        </div>
        <div class="summary" id="summary${index}"></div>
    `;
    return container;
}

// Function to create a chart for a single contract
function createChart(data, index) {
    const ctx = document.getElementById(`gasChart${index}`).getContext('2d');
    
    // Create datasets for each compiler version
    const datasets = [];
    const allVersions = data.results[0].versions;
    
    allVersions.forEach((version, vIndex) => {
        const compilerType = version.compiler.type;
        const colorScheme = colorSchemes[compilerType];
        const backgroundColor = colorScheme.getColor(vIndex, allVersions.length);
        
        datasets.push({
            label: `${compilerType} ${version.compiler.version} gas`,
            data: data.results.map(r => r.versions[vIndex]?.gas || 0),
            backgroundColor,
            borderColor: colorScheme.getBorderColor(backgroundColor),
            borderWidth: 1,
            barPercentage: 0.9,
            categoryPercentage: 0.5
        });
    });

    // Sort results by maximum gas usage
    const sortedResults = [...data.results].sort((a, b) => {
        const maxA = Math.max(...a.versions.map(v => v.gas));
        const maxB = Math.max(...b.versions.map(v => v.gas));
        return maxB - maxA;
    });

    // Create chart
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedResults.map(r => r.name),
            datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                title: {
                    display: true,
                    text: 'Gas Usage Comparison by Method',
                    font: { size: 14 }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const result = sortedResults[context.dataIndex];
                            const version = result.versions[context.datasetIndex];
                            return [
                                `${version.compiler.type} ${version.compiler.version}: ${version.gas.toLocaleString()} gas`
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: { display: false }
                },
                x: {
                    grid: { color: '#e0e0e0' },
                    title: {
                        display: true,
                        text: 'Gas Usage',
                        font: { size: 12 }
                    },
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Function to update summary for a single contract
function updateSummary(data, index) {
    const summary = document.getElementById(`summary${index}`);
    const deploymentHtml = data.deployment.map(version => `
        <p>${version.compiler.type} ${version.compiler.version} gas: ${version.gas.toLocaleString()}</p>
    `).join('');

    summary.innerHTML = `
        <div class="deployment-info">
            <h4>Contract Deployment</h4>
            ${deploymentHtml}
        </div>
        <div class="methods-info">
            <h4>Methods Summary</h4>
            <p>Number of Tested Methods: ${data.methodCount}</p>
        </div>
    `;
}

// Function to update the dashboard
function updateChart(data) {
    if (!data || !Array.isArray(data) || data.length === 0) {
        showError('No valid data to display');
        return;
    }

    // Clear existing charts
    charts.forEach(chart => chart.destroy());
    charts = [];
    
    // Clear only the chart and summary sections
    const container = document.querySelector('.container');
    
    // Remove old chart sections but keep header and controls
    const oldSections = container.querySelectorAll('.contract-section');
    oldSections.forEach(section => section.remove());

    // Create sections for each contract
    data.forEach((contractData, index) => {
        // Create and append container for this contract
        const contractSection = createChartContainer(contractData.contractName, index);
        container.appendChild(contractSection);

        // Create chart and update summary
        charts.push(createChart(contractData, index));
        updateSummary(contractData, index);
    });
}

// Function to populate project dropdown
function populateProjects() {
    // Get list of available projects from the reports data
    const projects = Object.keys(REPORTS_DATA);
    
    const select = document.getElementById('projectSelect');
    select.innerHTML = '<option value="">Select a project...</option>';
    
    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project;
        option.textContent = project;
        select.appendChild(option);
    });
}

// Event listener for project selection
document.getElementById('projectSelect').addEventListener('change', (event) => {
    const projectName = event.target.value;
    if (projectName) {
        showLoading();
        const reports = readGasReports(projectName);
        if (reports) {
            const data = calculateGasDiff(reports.solcData, reports.solxData);
            updateChart(data);
        }
        hideLoading();
    }
});

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
}); 
