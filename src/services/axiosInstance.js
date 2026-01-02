import { redirectToLogin } from "@/utils/redirectToLogin";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized, please log in again.");
      redirectToLogin();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
