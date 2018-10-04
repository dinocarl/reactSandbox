import { combineReducers } from 'redux';
import {
  currentUnit,
  forecast,
  forecastHasErrored,
  forecastIsLoading
} from './forecast';

export default combineReducers({
  currentUnit,
  forecast,
  forecastHasErrored,
  forecastIsLoading
});
