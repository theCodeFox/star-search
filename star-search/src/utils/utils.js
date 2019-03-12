import React from 'react';

export const barChartData = (data) => {
  data.reduce((acc, meteorite) => {
    if (meteorite.fall === 'Fell') acc[0]++;
    else if (meteorite.fall === 'Found') acc[1]++;
    return acc;
  }, [0, 0, 0])
};
