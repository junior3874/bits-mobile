import "react-native-gesture-handler";
import React from "react";
import Routes from "./routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}
