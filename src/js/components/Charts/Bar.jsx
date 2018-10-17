import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  Legend
} from 'recharts';

const RechartChart = ({ data }) => (
  <ResponsiveContainer aspect={4 / 3}>
    <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Brush
        dataKey="name"
        startIndex={6}
        height={30}
        stroke="#666"
      />
      <Bar
        dataKey="pv"
        fill="#dd6666"
      />
    </BarChart>
  </ResponsiveContainer>
);


export default RechartChart;
