var configRadar = {
    type: 'radar',
    data: {
        labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132, 0.3)',
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: 'My Second dataset',
            backgroundColor: 'rgb(54, 162, 235, 0.3)',
            borderColor: window.chartColors.blue,
            pointBackgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]
    },
    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Radar Chart'
        },
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    }
};
