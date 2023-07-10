import { fork } from "redux-saga/effects";
import publicGists from "./PublicGists";

export default function* rootSaga() {
  yield fork(publicGists);
}
