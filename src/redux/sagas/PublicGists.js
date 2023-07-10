import { take, put, call, fork } from "redux-saga/effects";

import { getPublicGists, getGistForUser } from "../../services/gistService";
import * as types from "../actions/ActionTypes";

import { success, failure } from "../actions/PublicGists";

function callRequest(username) {
  if (username) {
    return getGistForUser(username);
  } else {
    return getPublicGists();
  }
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.PUBLIC_GISTS.REQUEST);
    try {
      const response = yield call(callRequest, payload);
      yield put(success(response.data));
    } catch (err) {
      yield put(failure(err));
      alert(err.message);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
