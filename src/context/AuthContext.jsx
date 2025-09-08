import { createContext } from "react";
import useAuth from "../hook/useAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const allContext = useAuth() //get data from useAuth hook then pass provider value

  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
