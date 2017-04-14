export const REQUEST_GEOLOCATION = 'REQUEST_GEOLOCATION';
export const GEOLOCATION_FETCH_SUCCEEDED = 'GEOLOCATION_FETCH_SUCCEEDED';
export const GEOLOCATION_FETCH_FAILED = 'GEOLOCATION_FETCH_FAILED';

export const requestGeoLocation = () => ({
  type: REQUEST_GEOLOCATION
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
