// Interactive Safety Performance Dashboard - PT Jambi Prima Coal
// Main Application Logic

class SafetyDashboard {
    constructor() {
        this.data = {
            monthlyData: {
                totalPerformance: [
                    {"month": "Jan", "manHours": 20500, "manPower": 820, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Feb", "manHours": 22300, "manPower": 835, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Mar", "manHours": 45800, "manPower": 915, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Apr", "manHours": 47200, "manPower": 945, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "May", "manHours": 48600, "manPower": 972, "accident": 0, "nearmiss": 1, "propertyDamage": 1, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Jun", "manHours": 47900, "manPower": 958, "accident": 0, "nearmiss": 1, "propertyDamage": 1, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Jul", "manHours": 46800, "manPower": 936, "accident": 0, "nearmiss": 1, "propertyDamage": 1, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Aug", "manHours": 46367, "manPower": 927, "accident": 0, "nearmiss": 1, "propertyDamage": 1, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0}
                ],
                ptJpcPerformance: [
                    {"month": "Jan", "manHours": 6150, "manPower": 246, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Feb", "manHours": 6690, "manPower": 251, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Mar", "manHours": 13740, "manPower": 274, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Apr", "manHours": 14160, "manPower": 284, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "May", "manHours": 14580, "manPower": 292, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Jun", "manHours": 14370, "manPower": 287, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Jul", "manHours": 14040, "manPower": 281, "accident": 0, "nearmiss": 0, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0},
                    {"month": "Aug", "manHours": 13910, "manPower": 278, "accident": 0, "nearmiss": 1, "propertyDamage": 0, "fireCase": 0, "enviroCase": 0, "lostTime": 0, "lostDays": 0, "firstAid": 0, "minorInjury": 0, "majorInjury": 0, "fatality": 0}
                ]
            },
            colors: {
                accident: '#dc3545',
                nearmiss: '#ffc107', 
                propertyDamage: '#fd7e14',
                fireCase: '#dc2626',
                enviroCase: '#8b5cf6',
                totalPerformance: '#0066cc',
                ptJpcPerformance: '#ff8c00'
            }
        };

        this.currentEntity = 'total';
        this.currentDateRange = 'ytd';
        this.charts = {};
        this.filteredData = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDashboard();
        this.initializeDataTable();
    }

    setupEventListeners() {
        // Entity selector
        document.querySelectorAll('[data-entity]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveButton(e.target, '[data-entity]');
                this.currentEntity = e.target.dataset.entity;
                this.updateDashboard();
            });
        });

        // Date range selector
        document.querySelectorAll('[data-range]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveButton(e.target, '[data-range]');
                this.currentDateRange = e.target.dataset.range;
                this.updateDashboard();
            });
        });

        // Custom date inputs
        document.getElementById('custom-start').addEventListener('change', () => this.updateDashboard());
        document.getElementById('custom-end').addEventListener('change', () => this.updateDashboard());

        // Export buttons
        document.getElementById('export-csv').addEventListener('click', () => this.exportData('csv'));
        document.getElementById('export-excel').addEventListener('click', () => this.exportData('excel'));

        // Table search
        document.getElementById('table-search').addEventListener('input', (e) => {
            this.filterTable(e.target.value);
        });
    }

    setActiveButton(activeBtn, selector) {
        document.querySelectorAll(selector).forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    updateDashboard() {
        this.updateKPIs();
        this.updateCharts();
        this.updateDataTable();
        this.toggleViews();
    }

    toggleViews() {
        const standardCharts = document.getElementById('standard-charts');
        const comparativeCharts = document.getElementById('comparative-charts');
        
        if (this.currentEntity === 'comparative') {
            standardCharts.classList.add('hidden');
            comparativeCharts.classList.remove('hidden');
            this.updateComparativeView();
        } else {
            standardCharts.classList.remove('hidden');
            comparativeCharts.classList.add('hidden');
        }
    }

    getCurrentData() {
        if (this.currentEntity === 'total') {
            return this.data.monthlyData.totalPerformance;
        } else if (this.currentEntity === 'jpc') {
            return this.data.monthlyData.ptJpcPerformance;
        }
        return this.data.monthlyData.totalPerformance;
    }

    calculateYTDTotals(data) {
        const totals = {
            manHours: 0,
            manPower: 0,
            accident: 0,
            nearmiss: 0,
            propertyDamage: 0,
            fireCase: 0,
            enviroCase: 0,
            lostTime: 0,
            lostDays: 0
        };

        data.forEach(month => {
            Object.keys(totals).forEach(key => {
                totals[key] += month[key] || 0;
            });
        });

        totals.totalCases = totals.accident + totals.nearmiss + totals.propertyDamage + totals.fireCase + totals.enviroCase;
        totals.frequencyRate = totals.manHours > 0 ? (totals.lostTime / totals.manHours * 1000000).toFixed(2) : '0.00';
        totals.severityRate = totals.manHours > 0 ? (totals.lostDays / totals.manHours * 1000000).toFixed(2) : '0.00';

        return totals;
    }

    updateKPIs() {
        const data = this.getCurrentData();
        const ytdTotals = this.calculateYTDTotals(data);

        document.getElementById('frequency-rate').textContent = ytdTotals.frequencyRate;
        document.getElementById('severity-rate').textContent = ytdTotals.severityRate;
        document.getElementById('total-cases').textContent = ytdTotals.totalCases;
        document.getElementById('lti-ytd').textContent = ytdTotals.lostTime;
        document.getElementById('total-manhours').textContent = ytdTotals.manHours.toLocaleString();
    }

    updateCharts() {
        this.createMonthlyTrendChart();
        this.createIncidentCompositionChart();
        this.createYTDProfileChart();
        this.createSeverityChart();
        this.createWorkforceIntensityChart();
    }

    createMonthlyTrendChart() {
        const ctx = document.getElementById('monthly-trend-chart').getContext('2d');
        const data = this.getCurrentData();
        
        if (this.charts.monthlyTrend) {
            this.charts.monthlyTrend.destroy();
        }

        const labels = data.map(d => d.month);
        const totalCases = data.map(d => d.accident + d.nearmiss + d.propertyDamage + d.fireCase + d.enviroCase);
        const manHours = data.map(d => d.manHours);

        this.charts.monthlyTrend = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Cases',
                    data: totalCases,
                    backgroundColor: '#1FB8CD',
                    yAxisID: 'y'
                }, {
                    label: 'Man Hours',
                    data: manHours,
                    type: 'line',
                    borderColor: '#FFC185',
                    backgroundColor: 'transparent',
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: { display: true, text: 'Total Cases' }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { display: true, text: 'Man Hours' },
                        grid: { drawOnChartArea: false }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            afterBody: (context) => {
                                const index = context[0].dataIndex;
                                const totalCases = totalCases[index];
                                const manHours = manHours[index];
                                const rate = manHours > 0 ? (totalCases / manHours * 1000000).toFixed(2) : '0.00';
                                return `Monthly Incident Rate: ${rate}`;
                            }
                        }
                    }
                }
            }
        });
    }

    createIncidentCompositionChart() {
        const ctx = document.getElementById('incident-composition-chart').getContext('2d');
        const data = this.getCurrentData();
        
        if (this.charts.incidentComposition) {
            this.charts.incidentComposition.destroy();
        }

        const labels = data.map(d => d.month);
        const incidentTypes = ['accident', 'nearmiss', 'propertyDamage', 'fireCase', 'enviroCase'];
        const colors = ['#dc3545', '#ffc107', '#fd7e14', '#dc2626', '#8b5cf6'];

        const datasets = incidentTypes.map((type, index) => ({
            label: this.formatIncidentType(type),
            data: data.map(d => d[type]),
            backgroundColor: colors[index]
        }));

        this.charts.incidentComposition = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { stacked: true },
                    y: { stacked: true, title: { display: true, text: 'Number of Incidents' } }
                }
            }
        });
    }

    createYTDProfileChart() {
        const ctx = document.getElementById('ytd-profile-chart').getContext('2d');
        const data = this.getCurrentData();
        const ytdTotals = this.calculateYTDTotals(data);
        
        if (this.charts.ytdProfile) {
            this.charts.ytdProfile.destroy();
        }

        const incidentData = [
            ytdTotals.accident,
            ytdTotals.nearmiss,
            ytdTotals.propertyDamage,
            ytdTotals.fireCase,
            ytdTotals.enviroCase
        ];

        const labels = ['Accident', 'Nearmiss', 'Property Damage', 'Fire Case', 'Enviro Case'];
        const colors = ['#dc3545', '#ffc107', '#fd7e14', '#dc2626', '#8b5cf6'];

        this.charts.ytdProfile = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: incidentData,
                    backgroundColor: colors
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = total > 0 ? ((context.raw / total) * 100).toFixed(1) : '0.0';
                                return `${context.label}: ${context.raw} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    createSeverityChart() {
        const ctx = document.getElementById('severity-chart').getContext('2d');
        const data = this.getCurrentData();
        
        if (this.charts.severity) {
            this.charts.severity.destroy();
        }

        const labels = data.map(d => d.month);
        const severityTypes = ['firstAid', 'minorInjury', 'majorInjury', 'fatality'];
        const colors = ['#ffc107', '#fd7e14', '#dc3545', '#8b0000'];

        const datasets = severityTypes.map((type, index) => ({
            label: this.formatSeverityType(type),
            data: data.map(d => d[type] || 0),
            backgroundColor: colors[index]
        }));

        this.charts.severity = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { stacked: true },
                    y: { stacked: true, title: { display: true, text: 'Number of Accidents' } }
                }
            }
        });
    }

    createWorkforceIntensityChart() {
        const ctx = document.getElementById('workforce-intensity-chart').getContext('2d');
        const data = this.getCurrentData();
        
        if (this.charts.workforceIntensity) {
            this.charts.workforceIntensity.destroy();
        }

        const labels = data.map(d => d.month);
        const avgHoursPerWorker = data.map(d => d.manPower > 0 ? (d.manHours / d.manPower).toFixed(2) : 0);

        this.charts.workforceIntensity = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Average Hours per Worker',
                    data: avgHoursPerWorker,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { title: { display: true, text: 'Hours per Worker' } }
                }
            }
        });
    }

    updateComparativeView() {
        this.createComparativeScorecard();
        this.createIncidentContributionChart();
        this.createManHoursContributionChart();
    }

    createComparativeScorecard() {
        const totalData = this.data.monthlyData.totalPerformance;
        const jpcData = this.data.monthlyData.ptJpcPerformance;
        
        const totalYTD = this.calculateYTDTotals(totalData);
        const jpcYTD = this.calculateYTDTotals(jpcData);

        const metrics = [
            { name: 'YTD Man Hours', total: totalYTD.manHours, jpc: jpcYTD.manHours },
            { name: 'YTD Total Cases', total: totalYTD.totalCases, jpc: jpcYTD.totalCases },
            { name: 'YTD Nearmisses', total: totalYTD.nearmiss, jpc: jpcYTD.nearmiss },
            { name: 'YTD Property Damage', total: totalYTD.propertyDamage, jpc: jpcYTD.propertyDamage },
            { name: 'Frequency Rate', total: totalYTD.frequencyRate, jpc: jpcYTD.frequencyRate },
            { name: 'Severity Rate', total: totalYTD.severityRate, jpc: jpcYTD.severityRate }
        ];

        const tbody = document.getElementById('scorecard-body');
        tbody.innerHTML = '';

        metrics.forEach(metric => {
            const variance = this.calculateVariance(metric.total, metric.jpc);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${metric.name}</td>
                <td>${typeof metric.total === 'number' ? metric.total.toLocaleString() : metric.total}</td>
                <td>${typeof metric.jpc === 'number' ? metric.jpc.toLocaleString() : metric.jpc}</td>
                <td class="${variance > 0 ? 'positive' : variance < 0 ? 'negative' : 'neutral'}">${variance.toFixed(1)}%</td>
            `;
            tbody.appendChild(row);
        });
    }

    calculateVariance(total, jpc) {
        if (total == 0 && jpc == 0) return 0;
        if (total == 0) return 100;
        return ((jpc - total) / total) * 100;
    }

    createIncidentContributionChart() {
        const ctx = document.getElementById('incident-contribution-chart').getContext('2d');
        
        if (this.charts.incidentContribution) {
            this.charts.incidentContribution.destroy();
        }

        const totalData = this.data.monthlyData.totalPerformance;
        const jpcData = this.data.monthlyData.ptJpcPerformance;
        const labels = totalData.map(d => d.month);

        const totalCases = totalData.map(d => d.accident + d.nearmiss + d.propertyDamage + d.fireCase + d.enviroCase);
        const jpcCases = jpcData.map(d => d.accident + d.nearmiss + d.propertyDamage + d.fireCase + d.enviroCase);

        this.charts.incidentContribution = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Total Performance',
                    data: totalCases,
                    backgroundColor: '#0066cc'
                }, {
                    label: 'PT JPC Performance',
                    data: jpcCases,
                    backgroundColor: '#ff8c00'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { title: { display: true, text: 'Total Cases' } }
                }
            }
        });
    }

    createManHoursContributionChart() {
        const ctx = document.getElementById('manhours-contribution-chart').getContext('2d');
        
        if (this.charts.manhoursContribution) {
            this.charts.manhoursContribution.destroy();
        }

        const totalData = this.data.monthlyData.totalPerformance;
        const jpcData = this.data.monthlyData.ptJpcPerformance;
        const labels = totalData.map(d => d.month);

        const jpcHours = jpcData.map(d => d.manHours);
        const otherHours = totalData.map((d, i) => d.manHours - jpcData[i].manHours);

        this.charts.manhoursContribution = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'PT JPC Hours',
                    data: jpcHours,
                    backgroundColor: 'rgba(255, 140, 0, 0.6)',
                    borderColor: '#ff8c00',
                    fill: true
                }, {
                    label: 'Other Operations Hours',
                    data: otherHours,
                    backgroundColor: 'rgba(0, 102, 204, 0.6)',
                    borderColor: '#0066cc',
                    fill: '-1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { 
                        stacked: true,
                        title: { display: true, text: 'Man Hours' }
                    }
                }
            }
        });
    }

    initializeDataTable() {
        this.setupTableSorting();
        this.updateDataTable();
    }

    updateDataTable() {
        const data = this.getCurrentData();
        const tbody = document.getElementById('data-table-body');
        tbody.innerHTML = '';

        const parameters = [
            { name: 'Total Man Hour', key: 'manHours' },
            { name: 'Total Man Power', key: 'manPower' },
            { name: 'Accident', key: 'accident' },
            { name: 'Nearmiss', key: 'nearmiss' },
            { name: 'Property Damage', key: 'propertyDamage' },
            { name: 'Fire Case', key: 'fireCase' },
            { name: 'Enviro Case', key: 'enviroCase' },
            { name: 'Total Lost Time', key: 'lostTime' },
            { name: 'Total Lost Day', key: 'lostDays' }
        ];

        parameters.forEach(param => {
            const row = document.createElement('tr');
            const ytdTotal = data.reduce((sum, month) => sum + (month[param.key] || 0), 0);
            
            row.innerHTML = `
                <td>${param.name}</td>
                ${data.map(month => `<td>${month[param.key] || 0}</td>`).join('')}
                <td><strong>${ytdTotal.toLocaleString()}</strong></td>
                <td>${param.key === 'manHours' && this.currentEntity === 'total' ? 'Since Last LTI: 1,098,361' : ''}</td>
            `;
            tbody.appendChild(row);
        });
    }

    setupTableSorting() {
        document.querySelectorAll('.sortable').forEach(th => {
            th.addEventListener('click', () => {
                const sortKey = th.dataset.sort;
                this.sortTable(sortKey, th);
            });
        });
    }

    sortTable(sortKey, headerElement) {
        // Simple sorting implementation for demo
        const tbody = document.getElementById('data-table-body');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        const isAsc = headerElement.classList.contains('asc');
        
        // Reset all headers
        document.querySelectorAll('.sortable').forEach(th => {
            th.classList.remove('asc', 'desc');
        });
        
        // Set current header direction
        headerElement.classList.add(isAsc ? 'desc' : 'asc');
    }

    filterTable(searchTerm) {
        const tbody = document.getElementById('data-table-body');
        const rows = tbody.querySelectorAll('tr');
        
        rows.forEach(row => {
            const parameterName = row.cells[0].textContent.toLowerCase();
            if (parameterName.includes(searchTerm.toLowerCase())) {
                row.classList.remove('filtered-out');
            } else {
                row.classList.add('filtered-out');
            }
        });
    }

    exportData(format) {
        const data = this.getCurrentData();
        let csvContent = "Parameter,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,YTD\n";
        
        const parameters = [
            { name: 'Total Man Hour', key: 'manHours' },
            { name: 'Total Man Power', key: 'manPower' },
            { name: 'Accident', key: 'accident' },
            { name: 'Nearmiss', key: 'nearmiss' },
            { name: 'Property Damage', key: 'propertyDamage' },
            { name: 'Fire Case', key: 'fireCase' },
            { name: 'Enviro Case', key: 'enviroCase' },
            { name: 'Total Lost Time', key: 'lostTime' },
            { name: 'Total Lost Day', key: 'lostDays' }
        ];

        parameters.forEach(param => {
            const ytdTotal = data.reduce((sum, month) => sum + (month[param.key] || 0), 0);
            const rowData = [
                param.name,
                ...data.map(month => month[param.key] || 0),
                ytdTotal
            ];
            csvContent += rowData.join(',') + '\n';
        });

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `safety-performance-${this.currentEntity}-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    formatIncidentType(type) {
        const formatMap = {
            accident: 'Accident',
            nearmiss: 'Nearmiss',
            propertyDamage: 'Property Damage',
            fireCase: 'Fire Case',
            enviroCase: 'Enviro Case'
        };
        return formatMap[type] || type;
    }

    formatSeverityType(type) {
        const formatMap = {
            firstAid: 'First Aid',
            minorInjury: 'Minor Injury',
            majorInjury: 'Major Injury',
            fatality: 'Fatality'
        };
        return formatMap[type] || type;
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SafetyDashboard();
});