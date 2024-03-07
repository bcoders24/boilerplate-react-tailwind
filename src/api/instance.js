import axios from "axios";

const getToken = () => {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  return token;
};

const instance = axios.create({
  baseURL: "https://hrms.bcodercastle.com/api",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getToken(),
  },
});
export default instance;
