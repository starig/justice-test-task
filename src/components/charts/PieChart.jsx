import React from 'react';
import {Pie} from "react-chartjs-2";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
import {useSelector} from "react-redux";

Chart.register(CategoryScale);


const PieChart = () => {
    const items = useSelector(state => state.items);
    const labels = [];
    items.map(item => {
        let contributed = item.contributed_by;
        if (!labels.includes(contributed)) {
            labels.push(contributed);
        }
    });


    const dataValues = [];
    for (let i in labels) {
        dataValues.push(0);
    }
    for (let i in labels) {
        items.map(item => {
            if (item.contributed_by === labels[i]) {
                dataValues[i]++
            }
        })
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'abv',
                data: dataValues,
                fill: false,
                backgroundColor: [
                    'rgba(81, 130, 231, 1)',
                    'rgba(244, 174, 67, 1)',
                    'rgb(100,172,227)',
                    'rgb(215,74,238)',
                ],
                borderColor: 'rgba(255, 99, 132, 0.2)',
            }
        ]

    }

    const options = {
        responsive: true,
        radius: 94,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Contributed by',
            },
        },
    };

    return (
        <Pie data={data} options={options}/>
    )
}

export default PieChart;