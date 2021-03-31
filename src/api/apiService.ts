import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";

import { API_KEY } from "./apiConfig";

class ApiService {
  async callApi(config: AxiosRequestConfig): Promise<AxiosPromise<AxiosResponse>> {
    return axios.request({
      ...config,
      headers: { ...config.headers, ["x-api-key"]: API_KEY },
    });
  }
}

export default new ApiService();
