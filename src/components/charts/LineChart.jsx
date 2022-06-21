import React from 'react';
import {Line} from "react-chartjs-2";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import {useSelector} from "react-redux";

Chart.register(CategoryScale);

const LineChart = () => {
    const items = useSelector(state => state.items);
    const labels = [];
    const dataValues = [];
    items.map(item => {
        labels.push(item.name);
        dataValues.push(item.attenuation_level);
    });


    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Attenuation level',
                data: dataValues,
                fill: false,
                spanGaps: [50, 60, 70, 80, 90, 100],
                backgroundColor: 'rgba(28, 175, 127, 1)',
                borderColor: 'rgba(28, 175, 127, 1)',
            }
        ]

    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                boxHeight: 220,
                boxWidth: 455,
            },
            title: {
                display: true,
                text: 'Attenuation level',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <Line data={data} options={options}/>
    )
}

export default LineChart;