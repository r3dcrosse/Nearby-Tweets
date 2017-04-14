import React, { Component } from 'react';

function CurrentLocationButton({ reqGeoLoc }) {
  return <button onClick={ reqGeoLoc }>Use my current location!</button>
};

export default CurrentLocationButton;
