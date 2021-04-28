import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import toastConfig from "./lib/toastConfig";
import Routes from "./routes";
import { AuthProvider } from "./contexts/authContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="auto" />
      <Toast ref={toastRef => Toast.setRef(toastRef)} config={toastConfig} />
    </AuthProvider>
  );
}
