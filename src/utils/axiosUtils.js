import { Auth } from "aws-amplify";
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

AxiosInstance.interceptors.request.use(
  async (config) => {
    console.log(process.env.REACT_APP_API_URL);
    const token = (await Auth.currentSession()).idToken.jwtToken;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;
