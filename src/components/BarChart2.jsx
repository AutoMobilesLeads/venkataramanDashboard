import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import dayjs from 'dayjs';
import { compareBar as data } from '../data/mockData';
// Register the components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// const monthYearCounts = [
//     { x: "Jan2024", y: 1687 },
//     { x: "Feb2024", y: 1859 },
//     { x: "Mar2024", y: 2914 },
//     { x: "Apr2024", y: 893 },
//     { x: "May2024", y: 985 },
//     { x: "Jun2024", y: 538 }
// ];

const monthYearCounts = data
// console.log( "bar chart "+data)
function BarChart2() {
    const getCurrentMonthAndPreviousMonthData = () => {
        const currentMonth = dayjs().format('MMMYYYY');
        const previousMonth = dayjs().subtract(1, 'month').format('MMMYYYY');

        const currentMonthData = monthYearCounts.find(item => item.x === currentMonth)?.y || 0;
        const previousMonthData = monthYearCounts.find(item => item.x === previousMonth)?.y || 0;

        const currentMonthLabel = dayjs().format('MMMM YYYY');
        const previousMonthLabel = dayjs().subtract(1, 'month').format('MMMM YYYY');

        return {
            labels: [ previousMonthLabel,currentMonthLabel],
            data: [ previousMonthData, currentMonthData]
        };
    };

    const chartDataInitial = getCurrentMonthAndPreviousMonthData();

    const chartData = {
        labels: chartDataInitial.labels,
        datasets: [
            {
                data: chartDataInitial.data,
                backgroundColor: ["black", "grey"],
                borderWidth: 0.5,
            },
        ],
    };

    const [chartOptions, setChartOptions] = useState({
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        animation: {
            duration: 2000,
            easing: 'easeOutBounce',
        },
    });

    useEffect(() => {
        setChartOptions((prevOptions) => ({
            ...prevOptions,
            animation: {
                duration: 2000,
                easing: 'easeOutBounce',
            },
        }));
    }, []);

    return (
        <div style={{ maxWidth: "400px", marginTop: "70px" }}>
            <Bar data={chartData} height={200} options={chartOptions} />
        </div>
    );
}

export default BarChart2;
