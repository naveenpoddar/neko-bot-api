import axios from "axios";

const instance = axios.create({
  baseURL: "https://nekobot.xyz/api",
  withCredentials: true,
});

export default instance;
