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
          return { status: res.status, body: res.data };
        })
        .catch(err => ({ error: true, message: err.message })),
    []
  );

  const signUp = useCallback(
    data =>
      api
        .post("/signup", data)
        .then(res => ({ status: res.status, body: res.data }))
        .catch(err => ({ error: true, message: err.message })),
    []
  );

  return (
    <AuthContext.Provider value={{ signed, token, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
