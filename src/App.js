import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import Routes from "./routes";
import { AuthProvider } from "./contexts/authContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
