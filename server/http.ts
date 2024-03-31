import axios from "axios";
import { EXECUTOR_BASE_URL } from "./config";

export const http = axios.create({
  baseURL: EXECUTOR_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
