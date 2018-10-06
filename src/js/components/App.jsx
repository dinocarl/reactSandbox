import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import AllCharts from './AllCharts';
import Forecast from './Forecast';
import UnitToggle from './UnitToggle';
import allData from '../data';

const App = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
           Chart Comparisons
        </Typography>
      </Toolbar>
    </AppBar>
    <AllCharts className="chartsview" data={allData} />
  </div>
);

export default App;
