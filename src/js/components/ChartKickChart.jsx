import React from 'react';
import { prop } from 'ramda';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

const ChartKickChart = props => (
  <LineChart data={prop(`data`, props)} />
);

export default ChartKickChart;
