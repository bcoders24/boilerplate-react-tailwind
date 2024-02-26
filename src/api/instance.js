import axios from "axios";

const instance = axios.create({
  baseURL: "http://admin.mypack.fit/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default instance;
