import React from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

const ChartKickChart = ({ data }) => (
  <LineChart data={data} />
);

export default ChartKickChart;
