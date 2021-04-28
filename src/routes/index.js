import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigation from "./AuthStackNavigation";

function Routes() {
  return (
    <NavigationContainer>
      <AuthStackNavigation />
    </NavigationContainer>
  );
}

export default Routes;
