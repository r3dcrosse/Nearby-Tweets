import Promise from 'bluebird';

////////////////////////////////////////////////////////////////////////////////
// Geo Location helpers
////////////////////////////////////////////////////////////////////////////////
/*
  locateMe returns a promise that sends back a coordinates object
*/
const locateMe = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve(position.coords);
    });
  });
};

// Fancy async handling for the interfacing with the navigator/geolocation API
async function fetchCurrentGeoLocation() {
  return await locateMe();
};

// Exposed helper function for use in redux sagas
export function getGeoCoords() {
  return fetchCurrentGeoLocation();
};
////////////////////////////////////////////////////////////////////////////////
