import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';


const BarChart = (props) => {
  console.log(props.data)
  const data = {
    labels: ['Fallen', 'Found'],
    datasets: [
      {
        label: 'Fallen vs Found',
        backgroundColor: 'rgba(255,99,132,0.8)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 0]
      }
    ]
  };
  return (
    <div>
      <h2>Horizontal Bar Example</h2>
      <HorizontalBar data={data} />
    </div>
  );
};

export default BarChart;