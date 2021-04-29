import React, { createContext, useCallback, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function loadStoragedToken() {
      const storedToken = await AsyncStorage.getItem("@Bits:token");
      const tokenBearer = `Bearer ${storedToken}`;

      await api
        .get("/session", {
          headers: {
            Authorization: tokenBearer,
          },
        })
        .then(_ => {
          setSigned(true);
          setToken(storedToken);
          api.defaults.headers.Authorization = tokenBearer;
        })
        .catch(_ => {
          // token is not valid so do nothing
        });

      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(
    data =>
      api
        .post("/session", data)
        .then(async res => {
          await AsyncStorage.setItem("@Bits:token", res.data.token);
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
    <AuthContext.Provider value={{ signed, token, signIn, signUp, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
