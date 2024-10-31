import axios from "axios";
import Cookie from "cookie-universal";

const cookie = Cookie();

const token = cookie.get("token");

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});
