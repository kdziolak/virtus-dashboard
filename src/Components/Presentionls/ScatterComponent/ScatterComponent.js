import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class ScatterComponent extends Component {

    constructor() {
        super();
        this.state = {

        }
        this.getData = (canvas) => {
            const ctx = canvas.getContext("2d")
            const gradient = ctx.createLinearGradient(150.000, 0.000, 150.000, 300.000);
            gradient.addColorStop(0.250, 'rgba(33, 150, 243, 0.300)');
            gradient.addColorStop(1.000, 'rgba(255, 255, 255, 0.000)');
            return {
                labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
                datasets: [
                    {
                        label: 'Week',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        borderColor: '#2196f3',
                        backgroundColor: gradient,
                    }
                ]
            }
        }
    }

    state = {
        chart: {
            datasets: [
                {
                    label: 'Week',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: '',
                }
            ]
        }
    }



    render() {
        return (
            <Line
                data={this.getData}
                options={{
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                color: '#505464',
                                display: false
                            },
                            ticks: {
                                display: false,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: 'rgba(156, 161, 178, 255)',
                                fontWeight: '700',
                                padding: -30,
                            },
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    },
                    title: null

                }}
            />
        );
    }
}



export default ScatterComponent;