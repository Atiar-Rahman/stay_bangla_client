
// Service folder file only js format
// http://127.0.0.1:8000/

import axios from "axios";

const apiClient  = axios.create({
    baseURL:'https://hotel-management-blue-seven.vercel.app/api/v1'
    // baseURL:'http://127.0.0.1:8000/api/v1'
})

export default apiClient;