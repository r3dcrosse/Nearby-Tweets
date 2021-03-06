import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  requestGeoLocation,
  cancelGeoReq,
  setCustomGeoLocation,
  fetchTweets } from '../actions';
import App from '../components/App.jsx';

const mapStateToProps = state => {
  const { geoLocation } = state;

  return {
    latitude: geoLocation.latitude,
    longitude: geoLocation.longitude,
    isGettingCurrentGeoLoc: geoLocation.isGettingCurrentGeoLoc,
    isFetchingTweets: geoLocation.isFetchingTweets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestGeoLocation: () => dispatch(requestGeoLocation()),
    cancelGeoReq: () => dispatch(cancelGeoReq()),
    setCustomGeoLocation: (coords) => dispatch(setCustomGeoLocation(coords)),
    fetchTweets: (lat, lng) => dispatch(fetchTweets(lat, lng))
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
