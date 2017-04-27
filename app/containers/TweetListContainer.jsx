import React, { Component } from 'react';
import { connect } from 'react-redux';
import TweetList from '../components/TweetList.jsx';

const mapStateToProps = state => {
  // TODO: Don't use geoLocation, make a tweets reducer instead...
  const { geoLocation } = state;

  return { tweets: geoLocation.tweets };
};

const TweetListContainer = connect(mapStateToProps)(TweetList);

module.exports = TweetListContainer;
