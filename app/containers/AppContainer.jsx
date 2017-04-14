import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestGeoLocation } from '../actions';
import App from '../components/App.jsx';

const mapStateToProps = state => {
  const { currentGeoLoc, isGettingCurrentGeoLoc } = state;

  return {
    currentGeoLoc: currentGeoLoc,
    isGettingCurrentGeoLoc: isGettingCurrentGeoLoc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestGeoLocation: () => dispatch(requestGeoLocation())
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
