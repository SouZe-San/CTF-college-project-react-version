import axios from "axios";

const API = axios.create({
  baseURL: "https://fuku-api-specs.netlify.app",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // Cookie: "teamId = TNU2730",
  },
  withCredentials: true,
});

export const logIn = (authData) => API.post("/login", authData);
export const getAllChallenges = () => API.get("/challenges");
