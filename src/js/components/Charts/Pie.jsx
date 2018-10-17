import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend
} from 'recharts';
import Label from './Label';
import PieSlice from './PieSlice';
import { mapWithIndex } from '../../utils';

export default ({ data, type }) => (
  <ResponsiveContainer aspect={4 / 3}>
    <PieChart>
      <Pie
        data={data}
        dataKey="pv"
        labelLine={false}
        label={Label}
        isAnimationActive={false}
        innerRadius={(type === `Donut` ? `60%` : null)}
      >
        {
          mapWithIndex(PieSlice, data)
        }
      </Pie>
      <Tooltip />
      <Legend iconType="circle" />
    </PieChart>
  </ResponsiveContainer>
);
