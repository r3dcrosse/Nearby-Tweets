import React, { Component } from 'react';
import CustomCoorinates from './CustomCoordinates.jsx';
import CurrentLocationButton from './CurrentLocationButton.jsx';

class App extends Component {
  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  render() {
    console.log(this.props.latitude);
    return (
      <div>
        <CustomCoorinates
          latitude={this.props.latitude}
          longitude={this.props.longitude}
          handleCustomCoords={this.props.setCustomGeoLocation}
        />
        <CurrentLocationButton
          reqGeoLoc={() => this.props.requestGeoLocation() }
        />
      </div>
    )
  }
};

export default App;
