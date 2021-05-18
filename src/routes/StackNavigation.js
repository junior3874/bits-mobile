import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "./BottomTabNavigation";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Debts from "../pages/Debts";
import CreateWallet from "../pages/CreateWallet";

import { AuthContext } from "../contexts/authContext";

const Stack = createStackNavigator();

function AuthStackNavigation() {
  const { signed } = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      {signed ? (
        <>
          <Stack.Screen name="Overview" component={BottomTabNavigation} />
          <Stack.Screen name="Debts" component={Debts} />
          <Stack.Screen name="CreateWallet" component={CreateWallet} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default AuthStackNavigation;
