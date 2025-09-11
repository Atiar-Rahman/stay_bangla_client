
//Service folder file only js format

import axios from "axios";

const apiClient  = axios.create({
    baseURL:'https://stay-bangla-atiars-projects.vercel.app/api/v1'
})

export default apiClient;