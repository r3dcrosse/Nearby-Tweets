import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getGeoCoords } from '../API';

// worker Saga: will be fired on REQUEST_GEOLOCATION actions
function* fetchCurrentGeoLocation(action) {
   try {
      const currentGeoLoc = yield call(getGeoCoords);

      yield put({
        type: "GEOLOCATION_FETCH_SUCCEEDED",
        coords: { lat: currentGeoLoc.latitude, lng: currentGeoLoc.longitude }
      });

   } catch (e) {
      yield put({type: "GEOLOCATION_FETCH_FAILED", message: e.message});
   }
};

/*
  Starts fetchCurrentGeoLocation on each dispatched `REQUEST_GEOLOCATION` action
  Allows concurrent fetches of geoLocation.
*/
function* mySaga() {
  yield takeEvery('REQUEST_GEOLOCATION', fetchCurrentGeoLocation);
};

export default mySaga;
