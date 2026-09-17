import axios from "axios";
import  useAuth from "../Auth/context/UseAuthContext";

const api = axios.create({
  baseURL: "http://localhost:5173/api",
  withCredentials: true,
});

const AuthApi = () => {
  const { accessToken } = useAuth();

  api.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Autherozation = `Bearer ,${accessToken}`;
      }
      return config;
    },

    (error) => {
      return Promise.reject(error);
    },
  );
  return api;
};

export default AuthApi;
