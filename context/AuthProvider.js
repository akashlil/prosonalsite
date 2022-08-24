import { createContext } from "react";
import useFirebase from "../hook/useFirebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const valueAll = useFirebase();

  return (
    <authContext.Provider value={valueAll}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
