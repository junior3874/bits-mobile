import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import toastConfig from "./lib/toastConfig";
import Routes from "./routes";
import { AuthProvider } from "./contexts/authContext";
import { WalletProvider } from "./contexts/walletContext";

export default function App() {
  return (
    <AuthProvider>
      <WalletProvider>
        <Routes />
        <StatusBar style="auto" />
        <Toast ref={toastRef => Toast.setRef(toastRef)} config={toastConfig} />
      </WalletProvider>
    </AuthProvider>
  );
}
