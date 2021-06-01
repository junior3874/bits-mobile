import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  ImageContainer,
  FourItemsDisplay,
  Half,
  AddTransaction,
  AddTransactionTouchable,
  ChooseActionView,
  ChooseAction,
  ChooseActionTouchable,
  ChooseActionIcon,
} from "../styles/components/customBottomTabBar";

import bottomImg from "../assets/images/subtract.png";
import plusImg from "../assets/images/plus.png";
import leftAndRightArrowImg from "../assets/images/left-and-right-arrow.png";
import debtsImg from "../assets/images/debts.png";
import budgetsImg from "../assets/images/budgets.png";

import TabBarItem from "./TabBarItem";

function MyTabBar({ state, navigation, descriptors }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const firstPairOfRoutes = state.routes.slice(0, 2);
  const secondPairOfRoutes = state.routes.slice(2, 4);
  // const fourItems = [firstPairOfRoutes, secondPairOfRoutes];

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <ImageContainer source={bottomImg} pointerEvents="box-none">
        <FourItemsDisplay>
          <Half>
            {/* first half */}
            {firstPairOfRoutes.map((route, index) => (
              <TabBarItem
                route={route}
                index={index}
                indexOffset={0}
                navigation={navigation}
                state={state}
                descriptors={descriptors}
                key={route.key}
              />
            ))}
          </Half>
          <Half>
            {/* second half */}
            {secondPairOfRoutes.map((route, index) => (
              <TabBarItem
                route={route}
                index={index}
                indexOffset={2}
                navigation={navigation}
                state={state}
                descriptors={descriptors}
                key={route.key}
              />
            ))}
          </Half>
        </FourItemsDisplay>
      </ImageContainer>
      <AddTransaction
        style={{ bottom: isMenuOpen ? 24 : 40 }}
        pointerEvents="box-none"
      >
        <AddTransactionTouchable onPress={toggleMenu} isMenuOpen={isMenuOpen}>
          <Feather
            name="plus"
            size={40}
            color={isMenuOpen ? "white" : "#8900f2"}
          />
        </AddTransactionTouchable>
      </AddTransaction>
      {isMenuOpen && (
        <ChooseActionView>
          <ChooseAction>
            <ChooseActionTouchable
              left
              onPress={() => {
                navigation.navigate("CreateTransaction");
                toggleMenu();
              }}
            >
              <ChooseActionIcon source={leftAndRightArrowImg} />
            </ChooseActionTouchable>
            <ChooseActionTouchable center>
              <ChooseActionIcon source={debtsImg} style={{ marginTop: 18 }} />
            </ChooseActionTouchable>
            <ChooseActionTouchable right>
              <ChooseActionIcon source={budgetsImg} />
            </ChooseActionTouchable>
          </ChooseAction>
        </ChooseActionView>
      )}
    </>
  );
}

export default MyTabBar;
