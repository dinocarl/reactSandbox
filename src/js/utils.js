import {
  map,
  addIndex,
  join
} from 'ramda';

export const strConcat = join(``);

export const mapWithIndex = addIndex(map);

export const toC = (val) => Math.round(val - 273.15);

export const toF = (val) => Math.round(toC(val) * 1.8 + 32);

export const unitCases = {
  C: toC,
  F: toF
};
