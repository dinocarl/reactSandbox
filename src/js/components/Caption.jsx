import React from 'react';
import { Typography } from '@material-ui/core';

const Caption = ({ text }) => (
  <Typography variant="caption" gutterBottom align="center">
    {text}
  </Typography>
);

export default Caption;
