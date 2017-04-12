import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import AppContainer from './containers/AppContainer.jsx';
import DevTools from './DevTools.jsx';
import { persistState } from 'redux-devtools';

const enhancer = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches [1] : null;
}

const store = createStore(
  reducer,
  enhancer
);

render((
  <Provider store={store}>
    <div>
      <AppContainer />
      <DevTools />
    </div>
  </Provider>
), document.getElementById('root'));
