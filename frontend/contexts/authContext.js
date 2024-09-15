import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      await SecureStore.setItemAsync("token", res.data.token);
      setUserToken(res.data.token);
    } catch (error) {
      console.log("Login failed", error);
    }
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    await SecureStore.deleteItemAsync("token");
    setUserToken(null);
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        setUserToken(token);
      }
    } catch (e) {
      console.log("Error fetching token", e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, userToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
