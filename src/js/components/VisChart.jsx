import React from 'react';
import {
  makeWidthFlexible,
  XYPlot,
  HorizontalGridLines,
  LineSeries,
  XAxis,
  YAxis
} from 'react-vis';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const VisChart = ({ data }) => (
  <FlexibleXYPlot
    height={300}
  >
    <HorizontalGridLines />
    <LineSeries
      data={data}
    />
    <XAxis />
    <YAxis />
  </FlexibleXYPlot>
);

export default VisChart;
