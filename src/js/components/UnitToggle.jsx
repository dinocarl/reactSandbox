import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleUnit } from '../actions/forecast';

// eslint-disable-next-line react/prefer-stateless-function
class UnitToggle extends Component {
  constructor() {
    super();
    this.toggleAction = this.toggleAction.bind(this);
  }

  toggleAction() {
    const { currentUnit, toggler } = this.props;
    return toggler(currentUnit);
  }

  render() {
    const { currentUnit } = this.props;
    return (
      <Button color="inherit" onClick={this.toggleAction}>
        °
        {currentUnit}
      </Button>
    );
  }
}

UnitToggle.propTypes = {
  currentUnit: PropTypes.string
};

UnitToggle.defaultProps = {
  currentUnit: `C`
};

const mapStateToProps = state => ({
  currentUnit: state.currentUnit
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggler: toggleUnit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnitToggle);
