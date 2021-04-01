import { all } from "redux-saga/effects";

import imageUploadSagas from "./imageUpload/sagas";
import catsListingSagas from "./catsListing/sagas";

export default function* rootSaga() {
  yield all([imageUploadSagas(), catsListingSagas()]);
}
