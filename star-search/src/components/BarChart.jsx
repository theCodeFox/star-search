import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { barChartData } from '../utils/utils';

const BarChart = (props) => {
  const dataSet = barChartData(props.meteoriteData)
  const data = {
    labels: ['Fallen', 'Found'],
    datasets: [
      {
        label: 'Fallen vs Found',
        backgroundColor: 'rgba(198, 178, 21, 1)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(198, 178, 21,0.4)',
        hoverBorderColor: 'black',
        data: dataSet
      }
    ]
  };
  return (
    <div>
      <h2>Fallen vs Found</h2>
      <HorizontalBar data={data} height={50}
	options={{
		maintainAspectRatio: false
	}}/>
    </div>
  );
};

export default BarChart;