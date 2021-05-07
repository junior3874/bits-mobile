import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Overview from "../pages/Overview";
import CreateWallet from "../pages/CreateWallet";

const Stack = createStackNavigator();

function OverviewStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Overview" headerMode="none">
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="CreateWallet" component={CreateWallet} />
    </Stack.Navigator>
  );
}

export default OverviewStackNavigation;
