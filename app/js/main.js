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
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}