const ctx = document.getElementById('myPieChart').getContext('2d');
const data = {
    labels: ['Saudi Arabia', 'Russia', 'Iraq', 'United Arab Emirates', 'Canada'],
    datasets: [{
        data: [133.3, 60, 55, 30, 40],
        backgroundColor: ['#ff6666', '#66ff66', '#ffcc66', '#66b3ff', '#c2c2f0'],
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

const myPieChart = new Chart(ctx, config);

document.querySelector('#download').addEventListener('click', () => {
    const element = document.querySelector('#content');
    const opt = {
        margin:       1,
        filename:     'myChart.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
});
