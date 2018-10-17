import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { path } from 'ramda';
import LineChart from './Charts/Line';
import BarChart from './Charts/Bar';
import PieChart from './Charts/Pie';

const AllCharts = props => (
  <Grid container spacing={24}>
    <Grid item xs={12} md={6}>
      <Paper>
        <LineChart data={path([`data`, `rechartData`], props)} />
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper>
        <BarChart data={path([`data`, `rechartData`], props)} />
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper>
        <PieChart data={path([`data`, `rechartData`], props)} />
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper>
        <PieChart type="Donut" data={path([`data`, `rechartData`], props)} />
      </Paper>
    </Grid>
  </Grid>
);

export default AllCharts;
