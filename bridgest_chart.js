
let canvas = document.querySelector('#soda-chart')
let ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazano(NY)", "Golden Gate(CA)", "Mackinac(MI)", "Tacoma Narrows(WA)"],
        datasets: [{
            label: 'Span- Meters',
            data: [1298.4, 1280.2, 1158.0, 853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'green']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
