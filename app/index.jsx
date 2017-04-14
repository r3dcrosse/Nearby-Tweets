import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/index';
import mySaga from './sagas';
import AppContainer from './containers/AppContainer.jsx';
import DevTools from './DevTools.jsx';
import { persistState } from 'redux-devtools';


const enhancer = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0) ? matches [1] : null;
};

const store = createStore(
  reducer,
  enhancer,
  applyMiddleware(sagaMiddleware),
);

// then run the saga
sagaMiddleware.run(mySaga);

render((
  <Provider store={store}>
    <div>
      <AppContainer />
      <DevTools />
    </div>
  </Provider>
), document.getElementById('root'));
