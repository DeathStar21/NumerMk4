import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({chartData, title,legendLabel,colors}) {
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };
     
    // x axis
    /*
        const labels=[];
        for(var i=0;i<chartData.length;i++)
        {
            labels.push(chartData[i].iteration)
        }
    */
    const labels = chartData.map((item) => item.iteration);
    
    const datasets = []
    for(var i=0;i<colors.length;i++)
    {
        var tempData = {
            label: legendLabel[i], // legendLabel[i] = Xm
            data: chartData.map((item) => item[legendLabel[i]]),
            borderColor: 'rgb('+colors[i]+')',
            backgroundColor: 'rgba('+colors[i]+', 0.5)',
        }
        datasets.push(tempData)
    }

    const data = {
        labels: labels, // [1,2,3,4,...,27]
        datasets: datasets
    };
    return <Line options={options} data={data} />;
    //console.log('chartData =>',chartData);
}
