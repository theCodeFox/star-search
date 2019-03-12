import React from 'react';
import {Bubble} from 'react-chartjs-2';
import { donutChartLabels } from '../utils/utils';

const BubbleChart = (props) => {
    const dataSet = donutChartLabels(props.meteoriteData)
    const data = {
        labels: Object.keys(dataSet),
        datasets: [
    {
      label: 'Composition: Neurons & Protons, electrons, Number of Meteorites',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(198, 178, 21, 0.4)',
      borderColor: 'white',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Object.values(dataSet)
    }
  ]
};
return (
      <div>
        <h2>Meteorite Composition</h2>
        <Bubble data={data} />
      </div>
    );
};

export default BubbleChart;