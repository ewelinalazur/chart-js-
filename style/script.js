let ctx = document.getElementById('myChart').getContext('2d'); 
let labels = ['Pizza 🍕', 'Taco 🌮', 'Hot Dog 🌭', 'Sushi 🍣'];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B'];

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [30, 10, 20, 50],
            backgroundColor: colorHex
        }],
    labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
        plugins: {
                datalabels: {
                    color: '#fff',
                    formatter: (value) => {
                    return value + ' %';
                    }
                }
            }
        
        }
});