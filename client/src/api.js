// src/api.js

// Automatically switch between local and deployed backend
const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8080" // local backend (for testing)
    : "https://to-do-application-api.onrender.com"; // deployed backend

export default API_BASE_URL;
