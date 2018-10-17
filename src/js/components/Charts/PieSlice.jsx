import React from 'react';
import { Cell } from 'recharts';
import { chartPalette } from '../../config';

export default (entry, index) => <Cell key={`slice-${index}`} fill={chartPalette[index % chartPalette.length]} />;
