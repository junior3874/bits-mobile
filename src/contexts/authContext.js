import React, { createContext, useCallback, useState } from "react";

import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState();
  const [token, setToken] = useState();

  const signIn = useCallback(
    data =>
      api
        .post("/session", data)
        .then(res => {
          setToken(res.data.token);
          setSigned(true);
        })
        .catch(err => ({ error: true, message: err.message })),
    []
  );

  return (
    <AuthContext.Provider value={{ signed, token, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
