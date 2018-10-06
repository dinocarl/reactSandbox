import React from 'react';
import { prop } from 'ramda';
import {
  makeWidthFlexible,
  XYPlot,
  HorizontalGridLines,
  LineSeries,
  XAxis,
  YAxis
} from 'react-vis';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

const VisChart = props => (
  <FlexibleXYPlot
    height={300}
  >
    <HorizontalGridLines />
    <LineSeries
      data={prop(`data`, props)}
    />
    <XAxis />
    <YAxis />
  </FlexibleXYPlot>
);

export default VisChart;
