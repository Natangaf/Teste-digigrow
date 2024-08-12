import axios from "axios";

export const api = axios.create({
  baseURL: "https://teste-digigrow-back.onrender.com",
  timeout: 7000,
});
