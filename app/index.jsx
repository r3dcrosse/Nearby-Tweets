import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        This is the root of the app!!!
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
