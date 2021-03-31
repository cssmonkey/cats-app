import { put, call, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import ApiService from "../../api/apiService";
import apiConfig, { SUB_ID } from "../../api/apiConfig";

import { ACTION_TYPES, upload } from "./actions";

function* handleImageUpload({ file }: ReturnType<typeof upload>) {
  try {
    const response: AxiosResponse = yield call(ApiService.callApi, {
      url: apiConfig.endpoints.uploadImage,
      method: "POST",
      data: { file, sub_id: SUB_ID },
    });

    yield put({
      type: ACTION_TYPES.UPLOAD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: ACTION_TYPES.UPLOAD_ERROR,
    });
  }
}

export default function* imageUploadSagas() {
  yield takeEvery(ACTION_TYPES.UPLOAD, handleImageUpload);
}
