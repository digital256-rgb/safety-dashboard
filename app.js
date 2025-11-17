// Replace with your Google Apps Script URL
const API_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

let safetyData = [];

async function fetchData() {
    try {
        const response = await fetch(API_URL);
        safetyData = await response.json();
        updateDashboard();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function updateDashboard() {
    updateKPICards();
    createIncidentTypeChart();
    createMonthlyTrendChart();
    createSiteChart();
    createSeverityChart();
}

function updateKPICards() {
    // Total Incidents
    document.getElementById('totalIncidents').textContent = safetyData.length;
    
    // LTIFR (simplified calculation)
    const lostTimeIncidents = safetyData.filter(incident => incident.Days_Lost > 0).length;
    const ltifr = (lostTimeIncidents / safetyData.length * 100).toFixed(1);
    document.getElementById('ltifr').textContent = ltifr;
    
    // Days since last incident
    const lastIncident = new Date(Math.max(...safetyData.map(d => new Date(d.Date))));
    const daysSafe = Math.floor((new Date() - lastIncident) / (1000 * 60 * 60 * 24));
    document.getElementById('daysSafe').textContent = daysSafe;
    
    // Open investigations
    const openCases = safetyData.filter(incident => incident.Status === 'Investigation').length;
    document.getElementById('openCases').textContent = openCases;
}

function createIncidentTypeChart() {
    const types = {};
    safetyData.forEach(incident => {
        types[incident.Incident_Type] = (types[incident.Incident_Type] || 0) + 1;
    });

    new Chart(document.getElementById('incidentTypeChart'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(types),
            datasets: [{
                data: Object.values(types),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }]
        }
    });
}

function createMonthlyTrendChart() {
    const monthlyData = {};
    safetyData.forEach(incident => {
        const month = incident.Date.substring(0, 7); // YYYY-MM
        monthlyData[month] = (monthlyData[month] || 0) + 1;
    });

    new Chart(document.getElementById('monthlyTrendChart'), {
        type: 'line',
        data: {
            labels: Object.keys(monthlyData),
            datasets: [{
                label: 'Incidents per Month',
                data: Object.values(monthlyData),
                borderColor: '#36A2EB',
                tension: 0.1
            }]
        }
    });
}

function createSiteChart() {
    const sites = {};
    safetyData.forEach(incident => {
        sites[incident.Mine_Site] = (sites[incident.Mine_Site] || 0) + 1;
    });

    new Chart(document.getElementById('siteChart'), {
        type: 'bar',
        data: {
            labels: Object.keys(sites),
            datasets: [{
                label: 'Incidents by Site',
                data: Object.values(sites),
                backgroundColor: '#FF6384'
            }]
        }
    });
}

function createSeverityChart() {
    const severity = {};
    safetyData.forEach(incident => {
        severity[incident.Injury_Severity] = (severity[incident.Injury_Severity] || 0) + 1;
    });

    new Chart(document.getElementById('severityChart'), {
        type: 'pie',
        data: {
            labels: Object.keys(severity),
            datasets: [{
                data: Object.values(severity),
                backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0']
            }]
        }
    });
}

// Initialize dashboard
fetchData();
