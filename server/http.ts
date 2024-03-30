import axios from "axios";

export const http = axios.create({
  baseURL: "http://192.168.193.139:3003/",
  headers: {
    "Content-Type": "application/json",
  },
});
