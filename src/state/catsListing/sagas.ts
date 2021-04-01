import { put, call, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import ApiService from "../../api/apiService";
import apiConfig, { SUB_ID } from "../../api/apiConfig";

import { ACTION_TYPES } from "./actions";

function* handleFetchImages() {
  try {
    const response: AxiosResponse = yield call(ApiService.callApi, {
      url: apiConfig.endpoints.fetchImages,
      method: "GET",
      params: {
        limit: 100,
        page: 0,
        order: "DESC",
        include_vote: 1,
        include_favourite: 1,
        sub_id: SUB_ID,
      },
    });

    yield put({
      type: ACTION_TYPES.FETCH_IMAGES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: ACTION_TYPES.FETCH_IMAGES_ERROR,
    });
  }
}

export default function* catsListingSagas() {
  yield takeLatest(ACTION_TYPES.FETCH_IMAGES, handleFetchImages);
}
