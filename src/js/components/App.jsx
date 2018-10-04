import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Forecast from './Forecast';
import UnitToggle from './UnitToggle';

const App = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
           5 Day Forecast in
        </Typography>
        <UnitToggle />
      </Toolbar>
    </AppBar>
    <Forecast />
  </div>
);

export default App;
