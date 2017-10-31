/*********************************** VISITORS CHART   ***********************************/

var chartVisitor = document.querySelector("#ChartVisitors");
// console.log(chart);
var chartContentVisitor = new Chart(chartVisitor, {
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

/*********************************** CLICK RATE CHART   ***********************************/

var chartClickRate = document.querySelector("#ChartClickRate");
// console.log(chart);
var chartContentClickRate = new Chart(chartClickRate, {
    type: "line",
    data:{
        labels: ["Age", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        datasets: [{
            label: '# Click Rate %',
            data: [41, 22, 10, 56, 24, 54, 17, 45, 65, 54, 43, 33],
            fill: false,
            lineTension: 0.5,
            borderColor: 'blue',
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

/*********************************** AVG SESSION CHART   ***********************************/

var chartSession = document.querySelector("#ChartSession");
// console.log(chart);
var chartContentSession = new Chart(chartSession, {
    type: "line",
    data:{
        labels: ["Age", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        datasets: [{
            label: '# Avg Session (min)',
            data: [41, 54, 76, 66, 14, 54, 45, 32, 10, 67, 32, 44],
            fill: false,
            lineTension: 0.5,
            borderColor: 'green',
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

/*********************************** BOUNCE RATE CHART   ***********************************/

var chartBounceRate = document.querySelector("#ChartBounceRate");
// console.log(chart);
var chartContentClickRate = new Chart(chartBounceRate, {
    type: "line",
    data:{
        labels: ["Age", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
        datasets: [{
            label: '# Bounce Rate %',
            data: [70, 50, 110, 56, 67, 54, 32, 65, 89, 32, 87, 44],
            fill: false,
            lineTension: 0.5,
            borderColor: 'purple',
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

/*********************************** USER INFO CHART   ***********************************/

var chartUserInfo = document.querySelector("#ChartUserInfo");
// console.log(chart);

var chartContentUserInfo = new Chart(ChartUserInfo, {
    type: 'bar',
    data: {
        labels: ["Female", "Male", "Other"],
        datasets: [{
            label: '# User Info',
            data: [40, 55, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

/*********************************** DISPLAY CHARTS  ***********************************/

var abtnShowChart = document.getElementsByClassName("btnShowChart");

for (var i = 0; i < abtnShowChart.length; i++) {
    console.log("xx");
    abtnShowChart[i].addEventListener("click",function(){
        console.log("Chart btn has been clicked");
        // HIDE ALL GRAFS
            var aChart = document.getElementsByClassName( "cChart" );
            for(var j = 0; j < aChart.length; j++)
            {
                console.log("x");
                aChart[j].classList.remove("displayChart");
            }

            var sDataAttibute = this.getAttribute("data-showThisChart");
            // pageOne or pageTwo
            console.log(sDataAttibute);
            document.getElementById(sDataAttibute).classList.add("displayChart");

    });

}





