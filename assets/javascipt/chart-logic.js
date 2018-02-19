//require
var Chart = require('./chart.js-master/src/chart.js');
   
//proficient language variables

var ctx1 = $("#prof-lang-1");
var ctx2 = $("#prof-lang-2");
var ctx3 = $("#prof-lang-3")
var ctx4 = $("#prof-lang-4")
var ctx5 = $("#prof-lang-5")
var ctx6 = $("#prof-lang-6")
var ctx7 = $("#prof-lang-7")

//familiar language variables

var ctxFam1 = $("#fam-lang-1")
var ctxFam2 = $("#fam-lang-2")
var ctxFam3 = $("#fam-lang-3")
var ctxFam4 = $("#fam-lang-4")


//default styel overwrite

Chart.defaults.global.defaultFontColor = 'rgb(130, 27, 28)';
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.defaultFontFamily = 'font-family: Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", serif';
Chart.defaults.global.legend.display = false;

//prof-lang-1

var profLangChart1 = new Chart(ctx1, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            label: 'HTML/HTML5',
            data: [68],
            backgroundColor: [
                'rgb(178, 24, 12)'
            ],
            backgroundColor: [
                'rgba(178, 24, 12, .5)'
            ],
            borderColor: [
                'rgb(178, 24,12)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                },
            }]
        }
    }
});

//prof-lang-2

var profLangChart2 = new Chart(ctx2, {
    type: 'horizontalBar',
    labels: ["CSS/CSS3"],
    data: {
        datasets: [{
            label: 'CSS/CSS3',
            data: [57],
            backgroundColor: [
                'rgb(210, 47, 68)'
            ],
            backgroundColor: [
                'rgba(210, 47, 68, .5)'
            ],
            borderColor: [
                'rgb(210, 47, 68)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//prof-lang-3

var profLangChart3 = new Chart(ctx3, {
    type: 'horizontalBar',
    labels: ["JavaScript"],
    data: {
        datasets: [{
            label: 'JavaScript',
            data: [59],
            backgroundColor: [
                'rgb(179, 36, 100)'
            ],
            backgroundColor: [
                'rgba(179, 36, 100, .5)'
            ],
            borderColor: [
                'rgb(179, 36, 100)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//prof-lang-4

var profLangChart4 = new Chart(ctx4, {
    type: 'horizontalBar',
    labels: ["jQuery"],
    data: {
        datasets: [{
            label: 'jQuery',
            data: [48],
            backgroundColor: [
                'rgb(225, 92, 181)'
            ],
            backgroundColor: [
                'rgba(225, 92, 181, .5)'
            ],
            borderColor: [
                'rgb(225, 92, 181)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//prof-lang-5

var profLangChart5 = new Chart(ctx5, {
    type: 'horizontalBar',
    labels: ["APIs/AJAX"],
    data: {
        datasets: [{
            label: 'APIs/AJAX',
            data: [42],
            backgroundColor: [
                'rgb(154, 81, 186)'
            ],
            backgroundColor: [
                'rgba(154, 81, 186, .5)'
            ],
            borderColor: [
                'rgb(154, 81, 186)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//prof-lang-6

var profLangChart6 = new Chart(ctx6, {
    type: 'horizontalBar',
    labels: ["Git"],
    data: {
        datasets: [{
            label: 'Git',
            data: [44],
            backgroundColor: [
                'rgb(87, 43, 140)'
            ],
            backgroundColor: [
                'rgba(87, 43, 140, .5)'
            ],
            borderColor: [
                'rgb(87, 43, 140)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//prof-lang-7

var profLangChart7 = new Chart(ctx7, {
    type: 'horizontalBar',
    labels: ["Adobe Photoshop"],
    data: {
        datasets: [{
            label: 'Adobe Photoshop',
            data: [79],
            backgroundColor: [
                'rgb(7, 36, 102)'
            ],
            backgroundColor: [
                'rgba(7, 36, 102, .5)'
            ],
            borderColor: [
                'rgb(7, 36, 102)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//fam-lang-1

var famLangChart1 = new Chart(ctxFam1, {
    type: 'horizontalBar',
    labels: ["Express.js"],
    data: {
        datasets: [{
            label: 'Express.js',
            data: [39],
            backgroundColor: [
                'rgb(3, 71, 142)'
            ],
            backgroundColor: [
                'rgba(3, 71, 142, .5)'
            ],
            borderColor: [
                'rgb(3, 71, 142)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//fam-lang-2

var famLangChart2 = new Chart(ctxFam2, {
    type: 'horizontalBar',
    labels: ["Handlebars.js"],
    data: {
        datasets: [{
            label: 'Handlebars.js',
            data: [22],
            backgroundColor: [
                'rgb(3, 101, 150)'
            ],
            backgroundColor: [
                'rgba(3, 101, 150, .5)'
            ],
            borderColor: [
                'rgb(3, 101, 150)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//fam-lang-3
var famLangChart3 = new Chart(ctxFam3, {
    type: 'horizontalBar',
    labels: ["Node.js"],
    data: {
        datasets: [{
            label: 'Node.js',
            data: [34],
            backgroundColor: [
                'rgb(1, 91, 126)'
            ],
            backgroundColor: [
                'rgba(1, 91, 126, .5)'
            ],
            borderColor: [
                'rgb(1, 91, 126)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});

//prof-lang-4
var famLangChart4 = new Chart(ctxFam4, {
    type: 'horizontalBar',
    labels: ["MySQL"],
    data: {
        datasets: [{
            label: 'MySQL',
            data: [18],
            backgroundColor: [
                'rgb(1, 52, 79)'
            ],
            backgroundColor: [
                'rgba(1, 52, 79, .5)'
            ],
            borderColor: [
                'rgb(1, 52, 79)'
            ],
            borderWidth: 2,
            barPercentage: 0.9,
            categoryPercentage: 0.9,
            max: 100
        }],
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMax:100
                }
            }]
        }
    }
});



//var profLangChart = new Chart(ctx, {
//    type: 'radar',
//    data: ["HTML/HTML5", "CSS", "JavaScipt", "JQuery", "APIs/AJAX", "Git", "Adobe Photoshop"],
//    datasets: [{
//        data: [68, 57, 70, 48, 62, 65, 79],
//    }],
//});
//
//var famLangChart = new Chart(ctx2, {
//    type: 'bar',
//    data: ["Handlebars.js"],
//    datasets: [{
//        data: [20, 38, 15, 32],
//        backgroundColor: [
//                'rgba(255, 99, 132, 0.2)',
//                'rgba(54, 162, 235, 0.2)',
//                'rgba(255, 206, 86, 0.2)',
//                'rgba(75, 192, 192, 0.2)'
//            ],
//            borderColor: [
//                'rgba(255,99,132,1)',
//                'rgba(54, 162, 235, 1)',
//                'rgba(255, 206, 86, 1)',
//                'rgba(75, 192, 192, 1)'
//                ],
//        borderWidth: 1,
//        lineTension: 0
//    }],
//});

