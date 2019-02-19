import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class LineComponent extends Component {

    constructor() {
        super();
        this.state = {
            data: [1, 3, 2, 4, 5, 3, 1]
        }
        this.getData = (canvas) => {
            const ctx = canvas.getContext("2d")
            const gradient = ctx.createLinearGradient(0.000, 0.000, 0, 700);
            const point = ctx.createRadialGradient(7.500, 7.500, 0.000, 7.500, 7.500, 7.500);


            point.addColorStop(0.932, 'rgba(47, 50, 66, 1.000)');
            point.addColorStop(0.016, 'rgba(255, 255, 255, 1.000)');

            gradient.addColorStop(0.350, 'rgba(33, 150, 243, 0.300)');
            gradient.addColorStop(0.670, 'rgba(255, 255, 255, 0.000)');

            let datas = [...this.state.data]

            let pointRadius = datas.map(el => {
                if (Math.max(...datas) === el) {
                    return 7;
                }
                return 0;
            })

            return {
                labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
                datasets: [
                    {

                        label: 'Week',
                        data: this.state.data,
                        borderColor: '#2196f3',
                        backgroundColor: gradient,
                        pointBackgroundColor: point,
                        pointRadius: pointRadius,
                        pointBorderWidth: 3,
                    }
                ]
            }
        }
    }

    render() {
        return (
            <Line
                data={this.getData}
                height={10}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                display: false
                            },
                            ticks: {
                                display: false,
                                min: 0,
                                max: 7
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: 'rgba(156, 161, 178, 255)',
                                fontWeight: '700',
                                padding: -30,
                            },
                            gridLines: {
                                offsetGridLines: true,
                                color: 'rgba(156, 161, 178, 0.2)',
                            }
                        }]
                    },
                    title: null

                }}
            />
        );
    }
}



export default LineComponent;