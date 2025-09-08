import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // ✅ named import

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;