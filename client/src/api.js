// api.js
import axios from "axios"

const api = axios.create({
    // Change 3000 to 5000
    baseURL: "http://localhost:5000/api", 
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api