// console.log("hellow");

let data = [];
const ctx = document.getElementById('myChart');

const initialData = {
    labels: [],
    datasets: [{
        label: 'Value',
        data: data,
        borderColor: 'rgba(255, 0, 192, 0.5)',
        borderWidth: 1,
        fill: false,
    }],
};
const chartConfig = {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
        animation: false,
    },
};
chart = new Chart(ctx, chartConfig);
//  random values
setInterval(() => {
    const newData = Math.random() * 100;
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(newData);
    chart.update();

}, 1000)















