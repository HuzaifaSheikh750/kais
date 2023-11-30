import * as types from "./types";

import { takeEvery, call, put, delay, fork, all, takeLatest, take } from "redux-saga/effects";

import {
  fetchUserSuccess,
  fetchUserFailure,
} from "./actions";

import { loadUserApi } from "../../services/api";

// const fetchDataFromApi = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return response.json();
// };

export function* onLoadUserStartAsync() {
  try {
    const response = yield call(loadUserApi);
    if (response.status === 200) {
      yield put(fetchUserSuccess(response.data));
    }
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}


export function* onLoadUsers() {
  yield takeEvery(types.LOAD_FETCH_USERS, onLoadUserStartAsync);
}

const userSagas = [fork(onLoadUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}