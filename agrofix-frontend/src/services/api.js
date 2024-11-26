import axios from "axios";

// Create an instance of axios with a base URL
const API = axios.create({
    baseURL: "http://localhost:5000/api", // Update this to match your backend URL
});

// Export the axios instance
export default API;
