import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getGeoCoords, getTweets } from '../API';

// worker Saga: will be fired on REQUEST_GEOLOCATION actions
function* fetchCurrentGeoLocation() {
   try {
      const currentGeoLoc = yield call(getGeoCoords);

      yield put({
        type: "GEOLOCATION_FETCH_SUCCEEDED",
        coords: { lat: currentGeoLoc.latitude, lng: currentGeoLoc.longitude }
      });
   } catch (e) {
      yield put({ type: "GEOLOCATION_FETCH_FAILED", message: e.message });
   }
};

// worker saga: will be fired on FETCH_TWEETS action
function* fetchTweets(action) {
  // Handle case where lat/lng are undefined
  if (action.lat === undefined || action.lng === undefined) {
    yield put({
      type: "TWEETS_FETCH_FAILED", message: "Lat || Lng is undefined"
    });
  } else {
    try {
      const tweets = yield call(getTweets, { lat: action.lat, lng: action.lng });

      yield put({
        type: "TWEETS_FETCH_SUCCEEDED",
        tweets: tweets
      });
    } catch (e) {
      yield put({ type: "TWEETS_FETCH_FAILED", message: e.message });
    }
  }
};

/*
  Starts fetchCurrentGeoLocation on each dispatched `REQUEST_GEOLOCATION` action
  Allows concurrent fetches of geoLocation.
  Allows the latest fetch of tweets.
*/
function* mySaga() {
  yield takeEvery('REQUEST_GEOLOCATION', fetchCurrentGeoLocation);
  yield takeLatest('FETCH_TWEETS', fetchTweets);
};

export default mySaga;
