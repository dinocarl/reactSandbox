import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { path } from 'ramda';
import VicChart from './VicChart';
import RechartChart from './RechartChart';
import ChartKickChart from './ChartKickChart';
import VisChart from './VisChart';
import Caption from './Caption';

const AllCharts = props => (
  <Grid container spacing={24}>
    <Grid item xs={6}>
      <Paper>
        <VicChart data={path([`data`, `vicChartData`], props)} />
        <Caption text="Victory" />
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>
        <RechartChart data={path([`data`, `rechartData`], props)} />
        <Caption text="ReCharts" />
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>
        <ChartKickChart data={path([`data`, `chartKickData`], props)} />
        <Caption text="Chartkick" />
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>
        <VisChart data={path([`data`, `reactVisData`], props)} />
        <Caption text="ReactVis" />
      </Paper>
    </Grid>
  </Grid>
);

export default AllCharts;
