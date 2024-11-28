import axios from "axios";

// Create an instance of axios with a base URL
const API = axios.create({
    baseURL: "https://agrofix-1.onrender.com", // Update this to match your backend URL
});

// Export the axios instance
export default API;


// https://agrofix-1.onrender.com