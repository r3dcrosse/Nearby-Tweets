import React, { Component } from 'react';
import CurrentLocationButton from './CurrentLocationButton.jsx';

class App extends Component {

  componentDidMount() {
    // console.log(this.props);
    // dispatch(fetchGeoLocIfNeeded);
  }

  componentWillReceiveProps(nextProps) {
    // const { dispatch } = nextProps;
    // dispatch(fetchGeoLocIfNeeded);
  }

  render() {
    return (
      <div>
        <CurrentLocationButton reqGeoLoc={() => this.props.requestGeoLocation()} />
      </div>
    )
  }
};

export default App;
