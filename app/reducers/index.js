import { combineReducers } from 'redux';
import {
  REQUEST_GEOLOCATION,
  RECEIVE_GEOLOCATION,
  GEOLOCATION_FETCH_SUCCEEDED,
  GEOLOCATION_FETCH_FAILED
} from '../actions';

const initialState = {
  currentGeoLoc: {
    latitude: undefined,
    longitude: undefined
  },
  isGettingCurrentGeoLoc: false
};

export function geoLocation(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GEOLOCATION: {
      return {
        ...state,
        isGettingCurrentGeoLoc: true
      };
    };
    case GEOLOCATION_FETCH_SUCCEEDED: {
      return {
        ...state,
        currentGeoLoc: action.currentGeoLoc,
        isGettingCurrentGeoLoc: false
      };
    };
    case GEOLOCATION_FETCH_FAILED: {
      console.log(action.message);
      return state;
    };
    default:
      return state;
  };
};

const rootReducer = combineReducers({
  geoLocation
});

export default rootReducer;
