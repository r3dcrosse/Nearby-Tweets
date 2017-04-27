import React, { Component } from 'react';
import CustomCoorinates from './CustomCoordinates.jsx';
import CurrentLocationButton from './CurrentLocationButton.jsx';
import FetchTweetsButton from './FetchTweetsButton.jsx';
import TweetList from './TweetList.jsx';

class App extends Component {
  componentWillReceiveProps(newProps) {
    // console.log(newProps);
  }

  render() {
    const {
      latitude, longitude,
      setCustomGeoLocation,
      requestGeoLocation, cancelGeoReq,
      fetchTweets,
      isGettingCurrentGeoLoc } = this.props;

    return (
      <div>
        <CustomCoorinates
          latitude={ latitude }
          longitude={ longitude }
          handleCustomCoords={ setCustomGeoLocation }
        />
        <CurrentLocationButton
          reqGeoLoc={ () => requestGeoLocation() }
          cancelGeoReq={ () => cancelGeoReq() }
          isGettingCurrentGeoLoc={ isGettingCurrentGeoLoc }
        />
        <FetchTweetsButton
          onFetchTweets={ () => fetchTweets(latitude, longitude) }
        />
        <div>
          <TweetList />
        </div>
      </div>
    )
  }
};

export default App;
