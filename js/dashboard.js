

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
var chartContentBounceRate = new Chart(chartBounceRate, {
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

/*********************************** DISPLAY CHARTS  ***********************************/

new Chart(document.getElementById("pie-chart"), {
    type: 'doughnut',
    data: {
      labels: ["< 18", "19 - 24", "25 - 35", "36 - 45", "46 <"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [433,784,2478,5267,734]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Age'
      },
      legend: {
        position: 'left',
        labels: {
          boxWidth: 15,
          padding: 20
        },

      }

    }
});










