import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  Paper
} from '@material-ui/core';
import { map, join } from 'ramda';
import forecastEndPoint from '../config';
import { forecastFetchData } from '../actions/forecast';
import { unitCases } from '../utils';

const pickUnit = unit => unitCases[unit];

const loadingHtml = <p>Loading</p>;

const errorHtml = <p>Something went wrong</p>;

// eslint-disable-next-line react/prefer-stateless-function
class Forecast extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    return fetchData(forecastEndPoint);
  }

  render() {
    const {
      unit,
      hasErrored,
      isLoading,
      forecast
    } = this.props;

    const itemHtml = props => (
      <ListItem key={props.day}>
        <ListItemText
          primary={props.day}
          secondary={`
            ${join(`, `, props.description)}
            •
            Low ${pickUnit(unit)(props.lo)}
            High ${pickUnit(unit)(props.hi)}`
          }
        />
      </ListItem>
    );

    if (hasErrored) {
      return errorHtml;
    }

    if (isLoading) {
      return loadingHtml;
    }

    return (
      <Paper elevation={1}>
        <List>{map(itemHtml, forecast)}</List>
      </Paper>
    );
  }
}

Forecast.propTypes = {
  fetchData: PropTypes.func.isRequired,
  forecast: PropTypes.arrayOf(PropTypes.object),
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

Forecast.defaultProps = {
  forecast: []
};

const mapStateToProps = state => ({
  unit: state.currentUnit,
  forecast: state.forecast,
  hasErrored: state.forecastHasErrored,
  isLoading: state.forecastIsLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(forecastFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
