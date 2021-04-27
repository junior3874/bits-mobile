import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Overview from '../pages/Overview';

const Stack = createStackNavigator();

function OverviewStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Overview" headerMode="none">
      <Stack.Screen name="Overview" component={Overview} />
    </Stack.Navigator>
  );
}

export default OverviewStackNavigation;
