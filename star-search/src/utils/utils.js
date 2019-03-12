export const barChartData = (data) => {
  return data.reduce((acc, meteorite) => {
    if (meteorite.fall === 'Fell') acc[0]++;
    else if (meteorite.fall === 'Found') acc[1]++;
    return acc;
  }, [0, 0, 0])
};

export const donutChartLabels = (data) => {
  let count = 0;
  return data.reduce((acc, val) => {
    if (acc[val.recclass]) {
      acc[val.recclass].r++;
    }
    else acc[val.recclass] = {x:++count, y:Math.floor(Math.random() * 10) + 1, r:1};
    return acc;
  }, {})
}
export const donutChartData = (data) => {
  return data.reduce((acc, val) => {
    if (acc[val.recclass]) acc[val.recclass]++;
    else acc[val.recclass] = 1;
    return acc;
  }, {})
}
