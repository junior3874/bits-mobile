import React, { createContext, useCallback, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState();
  const [token, setToken] = useState();
  const [username, setUsername] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function loadStoragedToken() {
      const storedToken = await AsyncStorage.getItem("@Bits:token");
      const storedUsername = await AsyncStorage.getItem("@Bits:username");
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
          setUsername(storedUsername);
          api.defaults.headers.Authorization = tokenBearer;
        })
        .catch(_ => {
          // token is not valid so do nothing
        });

      setLoading(false);
    })();
  }, []);

  const signIn = useCallback(async data => {
    const res = await api
      .post("/session", data)
      .then(res => {
        setToken(res.data.token);
        setUsername(res.data.username);
        setSigned(true);

        return { status: res.status, body: res.data };
      })
      .catch(err => ({ error: true, message: err.message }));

    if (!res.error) {
      await AsyncStorage.setItem("@Bits:token", res.body.token);
      await AsyncStorage.setItem("@Bits:username", res.body.username);
    }

    return res;
  }, []);

  const signUp = useCallback(
    data =>
      api
        .post("/signup", data)
        .then(res => ({ status: res.status, body: res.data }))
        .catch(err => ({ error: true, message: err.message })),
    []
  );

  return (
    <AuthContext.Provider
      value={{ signed, token, username, signIn, signUp, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
