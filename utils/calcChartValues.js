export function calcChartValues(data) {
  const labels = [];
  for (
    let i = new Date(data[0][0]).getFullYear();
    i <= new Date().getFullYear();
    i++
  ) {
    labels.push(i);
  }

  const datasetsData = [];
  for (let i = 0; i < data.length; i++) {
    if (i % 5 === 0) {
      datasetsData.push(data[i][1]);
    }
  }
  return {labels, datasetsData};
}
