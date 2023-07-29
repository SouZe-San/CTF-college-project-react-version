import axios from "axios";

const API = axios.create({
  baseURL: "https://fuku-api-specs.netlify.app",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*", // Required for CORS support to work
  },
  withCredentials: true,
});

export const logIn = (authData) => API.post("/login", authData);
export const getAllChallenges = () =>
  API.get("/challenges", {
    headers: { Cookie: "teamId=TNU2730" },
  });
