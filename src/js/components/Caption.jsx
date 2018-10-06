import React from 'react';
import { prop } from 'ramda';
import { Typography } from '@material-ui/core';

const Caption = props => (
  <Typography variant="caption" gutterBottom align="center">
    {prop(`text`, props)}
  </Typography>
);

export default Caption;
