import { combineReducers } from 'redux';
import {
  REQUEST_GEOLOCATION,
  RECEIVE_GEOLOCATION
} from '../actions';

const initialState = {
  currentGeoLoc: {
    latitude: undefined,
    longitude: undefined
  },
  isGettingCurrentGeoLoc: false
}

export function geoLocation(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GEOLOCATION:
      return {
        ...state,
        isGettingCurrentGeoLoc: true
      }

    case RECEIVE_GEOLOCATION:
      return Object.assign({}, state, {
        isGettingCurrentGeoLoc: false,
        currentGeoLoc: action.currentGeoLoc
      });

    default:
      return state
  }
}

const rootReducer = combineReducers({
  geoLocation
});

export default rootReducer;
