import React, { Component } from 'react';

function CurrentLocationButton({
  reqGeoLoc, isGettingCurrentGeoLoc, cancelGeoReq }) {
    
  if (isGettingCurrentGeoLoc) {
    return (
      <span>
        <div>Getting current location...</div>
        <button onClick={ cancelGeoReq }>Cancel</button>
      </span>
    )
  } else {
    return <button onClick={ reqGeoLoc }>Use my current location!</button>
  }
};

export default CurrentLocationButton;
