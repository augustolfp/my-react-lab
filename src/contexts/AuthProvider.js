import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
