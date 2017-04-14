import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getGeoCoords } from '../API';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCurrentGeoLocation(action) {
   try {
      const currentGeoLoc = yield call(getGeoCoords);

      yield put({
        type: "GEOLOCATION_FETCH_SUCCEEDED",
        currentGeoLoc: currentGeoLoc
      });
   } catch (e) {
      yield put({type: "GEOLOCATION_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('REQUEST_GEOLOCATION', fetchCurrentGeoLocation);
}

export default mySaga;
