import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:1234/api",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
