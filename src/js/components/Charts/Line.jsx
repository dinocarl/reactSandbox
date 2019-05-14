import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  Legend
} from 'recharts';

const RechartChart = ({ data }) => (
  <ResponsiveContainer aspect={4 / 3}>
    <LineChart
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
      >
        <AreaChart>
          <YAxis hide />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#dd6666"
            fill="#dd6666"
            isAnimationActive={false}
            dot={false}
          />
        </AreaChart>
      </Brush>
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#dd6666"
        strokeWidth={3}
        isAnimationActive={false}
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);


export default RechartChart;
