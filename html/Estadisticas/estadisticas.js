const ctx = document.getElementById('myPieChart').getContext('2d');
const data = {
    labels: [ 'Enfermos', 'Sanos',],
    datasets: [{
        data: [50 ,30],
        backgroundColor: ['#ff6666', '#66ff66'],
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    }
};

new Chart(ctx, config);
