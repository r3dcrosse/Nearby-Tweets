import React, { Component } from 'react';

class CustomCoorinates extends Component {
  render() {
    return (
      <div>
        <input type='number' value={this.props.latitude} />
        <input type='number' value={this.props.longitude} />
        <button>Find Tweets!</button>
      </div>
    )
  }
}

export default CustomCoorinates;
