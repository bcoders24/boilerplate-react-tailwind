import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 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",
  },
});

export default instance;
