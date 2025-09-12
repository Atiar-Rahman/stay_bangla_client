
// Service folder file only js format

import axios from "axios";

const apiClient  = axios.create({
    baseURL:'https://hotel-management-blue-seven.vercel.app/api/v1'
})

export default apiClient;