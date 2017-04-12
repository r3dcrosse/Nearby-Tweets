export const REQUEST_GEOLOCATION = 'REQUEST_GEOLOCATION';
export const RECEIVE_GEOLOCATION = 'RECEIVE_GEOLOCATION';

export const requestGeoLocation = () => ({
  type: REQUEST_GEOLOCATION
});

export const receiveGeoLocation = currentGeoLoc => ({
  type: RECEIVE_GEOLOCATION,
  currentGeoLoc
});

// const getCurrentGeoLoc = () => dispatch => {
//   dispatch(requestGeoLocation);
//   dispatch(receiveGeoLocation({ longitude: 0, latitude: 0}));
// }

// const shouldFetchGeoLoc = state => {
//   const geoLocation = state.geoLocation;
//
//   return geoLocation.isGettingCurrentGeoLoc ? false : true;
// }
//
// export const fetchGeoLocIfNeeded = () => (dispatch, getState) => {
//   if (shouldFetchGeoLoc(getState())) {
//     return dispatch(requestGeoLocation);
//   }
// }
