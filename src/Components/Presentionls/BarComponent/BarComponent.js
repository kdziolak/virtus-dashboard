import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'

class BarComponent extends Component {

    state = {
        chart: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            datasets: [
                {
                    label: 'value',
                    data: [3.5, 5, 4, 2.5, 1.5, 2.5, 2.5, 3.5, 3, 4.5, 3.8, 1.2],
                    backgroundColor: '#505464'
                }
            ]
        }
    }

    argMax = (array) => {
        return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
    }

    backgroundCharts = () => {
        let color = this.state.chart.datasets[0].data.map(x => '#505464')
        color[this.argMax(this.state.chart.datasets[0].data)] = '#2196f3';
        this.setState({
            chart: {
                datasets: [
                    {
                        ...this.state.chart.datasets[0],
                        backgroundColor: color
                    }
                ]
            }
        })
    }

    componentDidMount() {
        this.backgroundCharts()
    }

    render() {
        return (
            <Bar
                data={this.state.chart}
                width={500}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                color: '#505464',
                            },
                            ticks: {
                                max: 6,
                                stepSize: 1,
                                display: false,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: 'rgba(156, 161, 178, 255)',
                                fontWeight: '700',
                                padding: 10
                            },
                            gridLines: [{ color: 'red' }]
                        }]
                    },
                    title: null

                }}
            />
        );
    }
}



export default BarComponent;