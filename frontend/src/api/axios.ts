import axios, { AxiosRequestConfig } from "axios";

import.meta.env.PROD;

const urlConfig: AxiosRequestConfig = import.meta.env.DEV
  ? { baseURL: `http://localhost:${import.meta.env.VITE_DEV_BACKEND_PORT}` }
  : {};

const instance = axios.create({
  ...urlConfig,
});

export const { get, put, patch, post, delete: destroy } = instance;
