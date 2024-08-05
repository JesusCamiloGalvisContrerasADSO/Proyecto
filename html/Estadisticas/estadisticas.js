const ctx = document.getElementById('myPieChart').getContext('2d');
const data = {
    labels: [ 'Enfermos', 'Sanos', 'Muertos'],
    datasets: [{
        data: [20 ,75, 5],
        backgroundColor: ['#ff6666', '#66ff66', '#00000'],
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
