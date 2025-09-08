
//useAuth handle all logic

import { useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
      const [user,setUser] = useState(null)

    const loginUser=(email,password)=>{
        const response = apiClient.post('/auth/jwt/create/',{email,password})
        console.log(response.data)
    }

    return {user,loginUser}
};

export default useAuth;
