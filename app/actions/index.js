export const REQUEST_GEOLOCATION = 'REQUEST_GEOLOCATION';
export const CANCEL_GEOLOCATION_REQUEST = 'CANCEL_GEOLOCATION_REQUEST';
export const GEOLOCATION_FETCH_SUCCEEDED = 'GEOLOCATION_FETCH_SUCCEEDED';
export const GEOLOCATION_FETCH_FAILED = 'GEOLOCATION_FETCH_FAILED';

export const SET_CUSTOM_GEOLOCATION = 'SET_CUSTOM_GEOLOCATION';

export const FETCH_TWEETS = 'FETCH_TWEETS';
export const TWEETS_FETCH_SUCCEEDED = 'TWEETS_FETCH_SUCCEEDED';
export const TWEETS_FETCH_FAILED = 'TWEETS_FETCH_FAILED';

export const requestGeoLocation = () => ({
  type: REQUEST_GEOLOCATION
});

export const cancelGeoReq = () => ({
  type: CANCEL_GEOLOCATION_REQUEST
})

export const setCustomGeoLocation = (coords) => ({
  type: SET_CUSTOM_GEOLOCATION,
  customCoords: coords
});

export const fetchTweets = (lat, lng) => ({
  type: FETCH_TWEETS,
  lat: lat,
  lng: lng
});
