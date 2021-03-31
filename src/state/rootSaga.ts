import { all } from "redux-saga/effects";

import imageUploadSagas from "./imageUpload/sagas";

export default function* rootSaga() {
  yield all([imageUploadSagas()]);
}
