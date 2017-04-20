import React, { Component } from 'react';
import CustomCoorinates from './CustomCoordinates.jsx';
import CurrentLocationButton from './CurrentLocationButton.jsx';
import FetchTweetsButton from './FetchTweetsButton.jsx';

class App extends Component {
  componentWillReceiveProps(newProps) {
    // console.log(newProps);
  }

  render() {
    const {
      latitude, longitude,
      setCustomGeoLocation,
      requestGeoLocation,
      fetchTweets } = this.props;

    return (
      <div>
        <CustomCoorinates
          latitude={ latitude }
          longitude={ longitude }
          handleCustomCoords={ setCustomGeoLocation }
        />
        <CurrentLocationButton
          reqGeoLoc={ () => requestGeoLocation() }
        />
        <FetchTweetsButton
          onFetchTweets={ () => fetchTweets(latitude, longitude) }
        />
      </div>
    )
  }
};

export default App;
