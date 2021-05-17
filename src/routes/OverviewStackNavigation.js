import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Overview from "../pages/Overview";
import Debts from "../pages/Debts";

const Stack = createStackNavigator();

function OverviewStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Overview" headerMode="none">
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="Debts" component={Debts} />
    </Stack.Navigator>
  );
}

export default OverviewStackNavigation;
