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

// Authentication Request
export const authentication = (authData) => API.post("/login", authData);

// Challenges  Request
export const getAllChallenges = () =>
  API.get("/challenges", {
    headers: { Cookie: "teamId=TNU2730" },
  });

// Dashboard Request
export const getRankUpdate = () =>
  API.get("/dashboard", {
    headers: { Cookie: "teamId=TNU2730" },
  });

// User Details Request
export const getUserDetails = () =>
  API.get("/id", {
    headers: { Cookie: "teamId=TNU2730" },
  });

// Flag Submit Request
export const flagSend = (flagData) =>
  API.post(
    "/submit",
    {
      headers: { Cookie: "teamId=TNU2730" },
    },
    flagData
  );

// Spawn Request
export const spawnCall = (challengeId) =>
  API.post(
    "/spawn",
    {
      headers: { Cookie: "teamId=TNU2730" },
    },
    challengeId
  );
