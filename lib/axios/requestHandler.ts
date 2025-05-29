import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosError, InternalAxiosRequestConfig } from "axios";

export const onRequestFulfilled = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = AsyncStorage.getItem("accessToken");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] : [${JSON.stringify(error)}]`);
  console.log(error.request);
  return Promise.reject(error);
};
