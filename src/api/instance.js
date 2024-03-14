import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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' 
  },
});

export default instance;

