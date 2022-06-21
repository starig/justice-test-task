import React from 'react';
import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import {useSelector} from "react-redux";
Chart.register(CategoryScale);

const BarChart = () => {
    const items = useSelector(state => state.items);
    const labels = [];
    const dataValues = [];
    items.map(item => {
        labels.push(item.name);
        dataValues.push(item.ibu);
    });

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'IBU',
                data: dataValues,
                fill: false,
                backgroundColor: [
                    'rgba(91, 106, 205, 1)',
                ],
                borderColor: 'rgba(255, 99, 132, 0.2)',
            }
        ]

    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                boxHeight: 569,
                boxWidth: 735,
            },
            title: {
                display: true,
                text: 'IBU',
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
        <Bar data={data} options={options} />
    )
}

export default BarChart;