import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OverviewStackNavigation from "./OverviewStackNavigation";

import { View, Text } from "react-native";
import CustomBottomTabBar from "../components/CustomBottomTabBar";

import Overview from "../pages/Overview";
import Transactions from "../pages/Transactions";
import Notifications from "../pages/Notifications";

import homeImg from "../assets/images/home.png";
import homeActiveImg from "../assets/images/home-active.png";
import bellImg from "../assets/images/bell.png";
import bellActiveImg from "../assets/images/bell-active.png";
import preferencesImg from "../assets/images/preferences.png";
import preferencesActiveImg from "../assets/images/preferences-active.png";
import priceTagImg from "../assets/images/price-tag.png";
import priceTagActiveImg from "../assets/images/price-tag-active.png";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      tabBar={props => <CustomBottomTabBar {...props} />}
    >
      <Tab.Screen
        name="Início"
        component={OverviewStackNavigation}
        options={{ iconImg: homeImg, activeIconImg: homeActiveImg }}
      />
      <Tab.Screen
        name="Notificações"
        component={Notifications}
        options={{ iconImg: bellImg, activeIconImg: bellActiveImg }}
      />
      <Tab.Screen
        name="Preferências"
        component={() => <Text>Teste1</Text>}
        options={{
          iconImg: preferencesImg,
          activeIconImg: preferencesActiveImg,
        }}
      />
      <Tab.Screen
        name="Loja"
        component={() => <Text>Teste1</Text>}
        options={{ iconImg: priceTagImg, activeIconImg: priceTagActiveImg }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
