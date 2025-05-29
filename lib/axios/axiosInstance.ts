import axios from "axios";
import { onRequestError, onRequestFulfilled } from "./requestHandler";
import { OnResponse, onResponseError } from "./responseHandler";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.68.115:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(onRequestFulfilled, onRequestError);
axiosInstance.interceptors.response.use(OnResponse, onResponseError);
