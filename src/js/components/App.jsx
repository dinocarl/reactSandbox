import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import StarRating from './StarRating';
import AllCharts from './AllCharts';
import allData from '../data';

const App = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
           Chart Options
        </Typography>
      </Toolbar>
      <StarRating ratingPct="50%" />
    </AppBar>
    <StarRating ratingPct="50%" />
    <AllCharts className="chartsview" data={allData} />
  </div>
);

export default App;
