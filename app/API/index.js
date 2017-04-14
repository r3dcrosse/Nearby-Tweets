import Promise from 'bluebird';

var fetchCoords = new Promise((resolve, reject) => {
  var locateMe = navigator.geolocation.getCurrentPosition((position) => {
    resolve(position);
  });
});

export const getGeoCoords = () => {

  var location = {}

  fetchCoords.then(function({ coords }) {
    location.latitude = coords.latitude;
    location.longitude = coords.longitude;
  });

  return location;

}
