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

    // Find compiler settings objects and contract objects
    const settingsObjects = contractData.filter(obj => obj.compilerSettings && !obj.contract);
    const contractObjects = contractData.filter(obj => obj.contract);

    // Group data by function name across all compiler versions
    const functionData = {};
    
    contractObjects.forEach(version => {
        Object.entries(version.functions).forEach(([funcName, data]) => {
            if (!functionData[funcName]) {
                functionData[funcName] = [];
            }
            // Add compiler settings to the version data
            const settings = settingsObjects.find(s => s.compiler.type === version.compiler.type)?.compilerSettings || {};
            functionData[funcName].push({
                compiler: version.compiler,
                gas: data.mean,
                compilerSettings: settings
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
    const deploymentInfo = contractObjects.map(version => {
        const settings = settingsObjects.find(s => s.compiler.type === version.compiler.type)?.compilerSettings || {};
        return {
            compiler: version.compiler,
            gas: version.deployment.gas,
            compilerSettings: settings
        };
    });

    return {
        results,
        deployment: deploymentInfo,
        methodCount,
        contractName: contractObjects[0].contract
    };
}

// Function to calculate gas differences
function calculateGasDiff(solcData, solxData) {
    if (!solcData || !solxData) {
        showError('Invalid compiler data provided');
        return [];
    }

    // Group contracts by their name, filtering out objects without contract property
    const contractGroups = {};
    
    [...solcData, ...solxData].forEach(item => {
        if (!item.contract) return; // Skip items without contract property
        
        if (!contractGroups[item.contract]) {
            contractGroups[item.contract] = [];
        }
        // Add all items from the same compiler type to the group
        const compilerType = item.compiler.type;
        const settingsObject = [...solcData, ...solxData].find(
            s => s.compilerSettings && !s.contract && s.compiler.type === compilerType
        );
        
        contractGroups[item.contract].push(item);
        if (settingsObject) {
            contractGroups[item.contract].push(settingsObject);
        }
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
    
    // Sort results by maximum gas usage
    const sortedResults = [...data.results].sort((a, b) => {
        const maxA = Math.max(...a.versions.map(v => Number(v.gas)));
        const maxB = Math.max(...b.versions.map(v => Number(v.gas)));
        return maxB - maxA;
    });

    // Create datasets for each compiler version
    const datasets = [];
    const allVersions = data.results[0].versions;
    
    allVersions.forEach((version, vIndex) => {
        const compilerType = version.compiler.type;
        const colorScheme = colorSchemes[compilerType];
        const backgroundColor = colorScheme.getColor(vIndex, allVersions.length);
        
        // Create dataset for this version
        const dataset = {
            label: `${compilerType} ${version.compiler.version}`,
            backgroundColor,
            borderColor: colorScheme.getBorderColor(backgroundColor),
            borderWidth: 1,
            barPercentage: 0.95,
            categoryPercentage: 0.8,
            data: []
        };

        // Fill in data for each method in sorted order
        sortedResults.forEach(method => {
            const matchingVersion = method.versions.find(v => 
                v.compiler.type === version.compiler.type && 
                v.compiler.version === version.compiler.version
            );
            dataset.data.push(matchingVersion ? Number(matchingVersion.gas) : 0);
        });

        datasets.push(dataset);
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
                            const methodName = sortedResults[context.dataIndex].name;
                            const version = allVersions[context.datasetIndex];
                            const matchingVersion = sortedResults[context.dataIndex].versions.find(v => 
                                v.compiler.type === version.compiler.type && 
                                v.compiler.version === version.compiler.version
                            );
                            const gas = matchingVersion ? Number(matchingVersion.gas).toLocaleString() : '0';
                            return `${version.compiler.type} ${version.compiler.version}: ${gas} gas`;
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
                    type: 'linear',
                    beginAtZero: true,
                    grid: { color: '#e0e0e0' },
                    title: {
                        display: true,
                        text: 'Gas Usage',
                        font: { size: 12 }
                    },
                    ticks: {
                        callback: function(value) {
                            return Number(value).toLocaleString();
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
    
    // Sort deployment data by gas usage (ascending)
    const sortedDeployment = [...data.deployment].sort((a, b) => a.gas - b.gas);
    const baseGas = sortedDeployment[0].gas;
    
    const deploymentHtml = sortedDeployment.map((version, idx) => {
        const percentageIncrease = idx === 0 ? '' : 
            ` <span class="text-red-500 font-medium">(+${((version.gas - baseGas) / baseGas * 100).toFixed(1)}%)</span>`;
            
        // Add special background for solx row
        const rowBgClass = version.compiler.type === 'solx' ? 
            'bg-blue-50 border border-blue-100' : 
            'bg-gray-50';
            
        return `
            <div class="flex justify-between items-center ${rowBgClass} rounded-lg px-4 py-3 font-mono text-sm">
                <span class="${version.compiler.type === 'solx' ? 'text-solx font-medium' : 'text-gray-700'}">${version.compiler.type} ${version.compiler.version}</span>
                <div class="flex items-center gap-2">
                    <span class="text-gray-900 font-medium">${version.gas.toLocaleString()} gas</span>
                    ${percentageIncrease}
                </div>
            </div>
        `;
    }).join('');

    // Process method comparisons
    const methodComparisons = [];
    data.results.forEach(method => {
        const versions = method.versions;
        // Group by compiler type
        const byCompiler = {};
        versions.forEach(v => {
            if (!byCompiler[v.compiler.type]) {
                byCompiler[v.compiler.type] = {
                    version: v.compiler.version,
                    gas: v.gas
                };
            }
        });
        
        // Calculate savings if we have both solc and solx
        if (byCompiler.solc && byCompiler.solx) {
            const savings = byCompiler.solc.gas - byCompiler.solx.gas;
            const savingsPercent = (savings / byCompiler.solc.gas) * 100;
            methodComparisons.push({
                name: method.name,
                savings,
                savingsPercent,
                solcGas: byCompiler.solc.gas,
                solxGas: byCompiler.solx.gas
            });
        }
    });

    // Sort by savings percentage
    methodComparisons.sort((a, b) => b.savingsPercent - a.savingsPercent);

    // Count methods where solx is more efficient
    const solxWins = methodComparisons.filter(m => m.savings > 0).length;

    // Generate comparison summaries
    const comparisonSummaries = [];
    const solcVersions = [...new Set(data.results[0].versions
        .filter(v => v.compiler.type === 'solc')
        .map(v => v.compiler.version))];

    solcVersions.forEach(solcVersion => {
        const relevantComparisons = data.results.map(method => {
            const solcData = method.versions.find(v => 
                v.compiler.type === 'solc' && 
                v.compiler.version === solcVersion
            );
            const solxData = method.versions.find(v => v.compiler.type === 'solx');
            
            if (solcData && solxData) {
                const savings = solcData.gas - solxData.gas;
                const savingsPercent = (savings / solcData.gas) * 100;
                return {
                    name: method.name,
                    savings,
                    savingsPercent,
                    solcGas: solcData.gas,
                    solxGas: solxData.gas
                };
            }
            return null;
        }).filter(Boolean);

        // Sort by savings percentage
        relevantComparisons.sort((a, b) => b.savingsPercent - a.savingsPercent);

        if (relevantComparisons.length > 0) {
            const solxWinsCount = relevantComparisons.filter(m => m.savings > 0).length;
            const efficientMethods = relevantComparisons
                .filter(m => m.savings > 0)
                .map(m => `
                    <div class="flex justify-between items-center bg-white rounded-lg p-3 font-mono text-sm">
                        <span class="text-gray-900">${m.name}</span>
                        <div class="flex items-center gap-3">
                            <span class="text-solc">${m.solcGas.toLocaleString()}</span>
                            <span class="text-gray-400">→</span>
                            <span class="text-solx">${m.solxGas.toLocaleString()}</span>
                            <span class="text-green-500">(${m.savingsPercent.toFixed(2)}%)</span>
                        </div>
                    </div>
                `).join('');
            
            comparisonSummaries.push(`
                <div class="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                    <div class="bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                        <h5 class="font-semibold text-gray-900">solx vs solc ${solcVersion}</h5>
                        <span class="text-gray-500 text-sm">${solxWinsCount} out of ${relevantComparisons.length} methods</span>
                    </div>
                    <div class="p-6">
                        <div class="text-gray-700 font-medium mb-4">methods where solx is more efficient:</div>
                        <div class="space-y-2">
                            ${efficientMethods}
                        </div>
                    </div>
                </div>
            `);
        }
    });

    summary.innerHTML = `
        <div class="space-y-6">
            <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                <div class="border-b border-gray-200">
                    <h4 class="text-lg font-semibold text-gray-900 px-6 py-4">Contract Deployment</h4>
                </div>
                <div class="p-6 space-y-3">
                    ${deploymentHtml}
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                <div class="border-b border-gray-200">
                    <h4 class="text-lg font-semibold text-gray-900 px-6 py-4">Methods Summary</h4>
                </div>
                <div class="p-6">
                    <div class="text-gray-600 pb-4 mb-6 border-b border-gray-200">
                        Total Methods Tested: ${data.methodCount}
                    </div>
                    <div class="space-y-6">
                        ${comparisonSummaries.join('')}
                    </div>
                </div>
            </div>
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
    
    // Get the chart container
    const container = document.getElementById('chartContainer');
    if (!container) {
        console.error('Chart container not found');
        return;
    }
    
    // Clear the container
    container.innerHTML = '';

    // Create sections for each contract
    data.forEach((contractData, index) => {
        // Create and append container for this contract
        const contractSection = createChartContainer(contractData.contractName, index);
        container.appendChild(contractSection);

        // Create chart and update summary
        const chart = createChart(contractData, index);
        if (chart) {
            charts.push(chart);
            updateSummary(contractData, index);
        }
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
