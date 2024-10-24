"use client";
import { authActions } from "@/redux/auth/slice";
import { store } from "@/redux/store";
import { message } from "antd";
import axios from "axios";
import queryString from "query-string";

const baseURL = process.env.NEXT_PUBLIC_API_GATEWAY_URL;

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 10 * 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log(error.response, "====response");
    console.log(error.message, "====message");
    if (error.message === "Network Error") {
      return Promise.reject(error);
    }

    if (error?.response?.status === 404) {
      return Promise.reject(new Error(error.message));
    }

    if (error?.response?.status === 401) {
      // const store = typeof window !== "undefined" ? storeNew : makeStore();
      const isAuthenticated = store.getState().auth.isAuthenticated;

      if (isAuthenticated) {
        store.dispatch(authActions.logout());
        message.error("Session is exprired");
      }

      return Promise.reject(error);
    }

    const wrapError = error?.response?.data || error;

    return Promise.reject(wrapError);
  }
);

export function setToken(token: string) {
  axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axiosClient;
