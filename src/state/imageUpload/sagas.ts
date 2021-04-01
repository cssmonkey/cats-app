import { put, call, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import ApiService from "../../api/apiService";
import apiConfig, { SUB_ID } from "../../api/apiConfig";

import { ACTION_TYPES, upload } from "./actions";

function* handleImageUpload({ image, onSuccessCallback }: ReturnType<typeof upload>) {
  try {
    const formData = new FormData();
    formData.append("file", image.file as File, image.file?.name);
    formData.append("sub_id", SUB_ID);

    const response: AxiosResponse = yield call(ApiService.callApi, {
      url: apiConfig.endpoints.uploadImage,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    });

    yield put({
      type: ACTION_TYPES.UPLOAD_SUCCESS,
      payload: response.data,
    });
    yield call(onSuccessCallback);
  } catch (error) {
    yield put({
      type: ACTION_TYPES.UPLOAD_ERROR,
    });
  }
}

export default function* imageUploadSagas() {
  yield takeEvery(ACTION_TYPES.UPLOAD, handleImageUpload);
}
