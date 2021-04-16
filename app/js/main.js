Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


function drawHighcharts() {
    Highcharts.chart("chart-container-millennial-income-1", { // add the proper ID here
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 55,
            spacingRight: 40,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '11HG2FEUr7d3jcrSVcJbFjgyhPgaTrI4vv3AI59cnR-k',
            googleSpreadsheetWorksheet: 1,
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1,
                dataLabels: {
                    enabled: true,
                    format: '{y}%',
                    x: 10
                },
                clip: false
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            y: -10,
            symbolPadding: 20,
            itemDistance: 40,
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
                // edits xAxis ticks
                // dateTimeLabelFormats: {
                //     week: '%b. %e',
                // },
            },
            tickLength: 10,
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
            },
            // min: ,
            visible: false,
            max: 40,
            tickAmount: 5,
            // adds commas to thousands
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            // valueSuffix: '',
            // valuePrefix: '',
            // valueDecimals: 2,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),
    Highcharts.chart("chart-container-millennial-income-2", { // add the proper ID here
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 55,
            spacingRight: 40,
            spacingLeft: 10,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '11HG2FEUr7d3jcrSVcJbFjgyhPgaTrI4vv3AI59cnR-k',
            googleSpreadsheetWorksheet: 2,
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1,
                dataLabels: {
                    enabled: true,
                    format: '{y}%',
                    x: 10
                }
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 0,
            y: 0,
            symbolPadding: 20,
            itemDistance: 40,
            itemMarginBottom: 40,
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap',
                },
                // edits xAxis ticks
                // dateTimeLabelFormats: {
                //     week: '%b. %e',
                // },
            },
            tickLength: 10,
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            visible: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
            },
            // min: ,
            // max: 30,
            tickAmount: 4,
            // adds commas to thousands
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            // valueSuffix: '',
            // valuePrefix: '',
            // valueDecimals: 2,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),
    Highcharts.chart("chart-container-millennial-income-3", { // add the proper ID here
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 35,
            spacingRight: 40,
            spacingLeft: 15,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '11HG2FEUr7d3jcrSVcJbFjgyhPgaTrI4vv3AI59cnR-k',
            googleSpreadsheetWorksheet: 3,
        },
        // for bar charts only
        // plotOptions: {
        //     series: {
        //         groupPadding: 0.1,
        //         clip: false,
        //     } ,
        // },
        // for line charts only
        plotOptions: {
            series: {
                lineWidth: 1,
                clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 0,
            y: 10,
            symbolPadding: 20,
            itemDistance: 40,
            itemMarginBottom: 40,
            floating: true
            // enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
                // edits xAxis ticks
                // dateTimeLabelFormats: {
                //     week: '%b. %e',
                // },
            },
            type: 'category',
            tickLength: 10,
            tickInterval: 8
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
            },
            min: -15,
            max:  0,
            tickAmount: 6,
            // adds commas to thousands
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            // valueSuffix: '',
            // valuePrefix: '',
            // valueDecimals: 2,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),
    Highcharts.chart("chart-container-millennial-income-4", { // add the proper ID here
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 35,
            spacingRight: 40,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '11HG2FEUr7d3jcrSVcJbFjgyhPgaTrI4vv3AI59cnR-k',
            googleSpreadsheetWorksheet: 4,
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1,
                clip: false
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 0,
            y: 400,
            symbolPadding: 20,
            itemDistance: 40,
            itemMarginBottom: 40,
            floating: true
            // enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
                // edits xAxis ticks
                // dateTimeLabelFormats: {
                //     week: '%b. %e',
                // },
            },
            type: 'category',
            tickLength: 10,
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
            },
            min: -75,
            max: 0,
            tickAmount: 4,
            // adds commas to thousands
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            // valueSuffix: '',
            // valuePrefix: '',
            // valueDecimals: 2,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),
    Highcharts.chart("chart-container-millennial-income-5", { // add the proper ID here
        chart: {
            type: 'heatmap',
            styledMode: true,
            spacingBottom: 55,
            spacingRight: 40,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        series: [{
            dataLabels: {
                enabled: true,
                format: '{point.value}%',
            },
            data: [[0, 0, 5], [1, 0, -4], [2, 0, -3], [3, 0, 10], [4, 0, 6], [0, 1, 49], [1, 1, 13], [2, 1, -4], [3, 1, 4], [4, 1, 4], [0, 2, 46], [1, 2, -5], [2, 2, -17], [3, 2, -3], [4, 2, 7], [0, 3, 38], [1, 3, -29], [2, 3, -27], [3, 3, -12], [4, 3, -5], [0, 4, -3], [1, 4, -43], [2, 4, -45], [3, 4, -22], [4, 4, 9], [0, 5, -43], [1, 5, -48], [2, 5, -55], [3, 5, -40], [4, 5, -11], [0, 6, null], [1, 6, null], [2, 6, null], [3, 6, -50], [4, 6, -50]],
        }],
        // for bar charts only
        // plotOptions: {
        //     series: {
        //         groupPadding: 0.1,
        //         clip: false
        //     } 
        // },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'top',
            y: -38,
            symbolHeight: 680,
            itemWidth: 80,
            labelFormatter: function () {
                return this.name;
            },
            enabled: false
        },
        xAxis: {
            categories: ['2007', '2010', '2013', '2016', '2019'],
            title: 'Survey year'
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            categories: ['1930s','1940s','1950s','1960s','1970s','1980s','1990s'],
            reversed: true
            // adds commas to thousand
        },
        colorAxis: {
            reversed: true,
            min: -55,
            max: 55,
            stops: [
                [0, '#FF685D'],
                [0.35, '#ffbaaf'],
                [0.5, '#ffffff'],
                [0.65, '#b9f6e4'],
                [0.9, '#61EBC9']
            ],
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            // valueSuffix: '',
            // valuePrefix: '',
            // valueDecimals: 2,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}