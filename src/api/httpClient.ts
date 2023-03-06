import axios from "axios";

import config from './config'

const httpClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: config.apiKey,
  },
});

httpClient.interceptors.request.use(async (config) => config);

httpClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default httpClient;
