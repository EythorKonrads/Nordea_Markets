// console.log("this is main.js");

var chart = document.querySelector("#visitorsChart");

// console.log(chart);

var chartContent = new Chart(chart, {
	type: "line",
	data:{
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        datasets: [{
            label: '# Visitors',
            data: [121, 192, 310, 265, 432, 223, 373, 253, 133, 527, 345, 125],
            fill: false,
            lineTension: 0.5,
            borderColor: '#ee6c5e',
            borderWidth: 2
        }]
	},
	    options: {
        // showLines: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// var chartContent = new Chart(chart, {
//     type: "line",
//     data:{
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: 'DK',
//             data: [12, 19, 13, 15, 20, 13],
//             fill: false,
//             lineTension: 0,
//             borderColor: 'rgba(255, 159, 64, .8)',
//             borderWidth: 4
//         }, {
//             label: 'SE',
//             data: [65, 45, 50, 38, 66, 56],
//             fill: false,
//             lineTension: 0,
//             borderColor: 'rgba(200, 108, 132, .8)',
//             borderWidth: 4
//         }]
//     },
//     options: {
//         // showLines: false,
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }


