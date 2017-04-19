import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestGeoLocation, setCustomGeoLocation } from '../actions';
import App from '../components/App.jsx';

const mapStateToProps = state => {
  const { geoLocation } = state;

  return {
    latitude: geoLocation.latitude,
    longitude: geoLocation.longitude,
    isGettingCurrentGeoLoc: geoLocation.isGettingCurrentGeoLoc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestGeoLocation: () => dispatch(requestGeoLocation()),
    setCustomGeoLocation: (coords) => dispatch(setCustomGeoLocation(coords))
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
