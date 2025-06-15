import axios from "axios";
import { clearStorage, getItem } from "../common/storage.services";
import { refreshToken } from "../api/Auth/auth";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

// const baseurl = import.meta.env.VITE_BASE_URL;
const baseurl = process.env.NEXT_BASE_URL;
const instance = axios.create({
  // every request should have base URL!
  baseURL: baseurl,
});

const onSuccess = (response) => {
  // do something if it was successful!
  return response;
};

const onError = (err) => {
  // if (err.response.status === 403) {
  //   refreshToken();
  // }
  return Promise.reject(err);
};
instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
  const token = getItem("access_token");
  opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
