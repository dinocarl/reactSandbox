import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine
} from 'victory';

const VicChart = ({ data }) => (
  <VictoryChart
    domainPadding={10}
    theme={VictoryTheme.material}
  >
    <VictoryAxis
      tickValues={[`Quarter 1`, `Quarter 2`, `Quarter 3`, `Quarter 4`]}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={(x) => (`$${x / 1000}k`)}
    />
    <VictoryLine
      data={data}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 }
      }}
    />
  </VictoryChart>
);


export default VicChart;
