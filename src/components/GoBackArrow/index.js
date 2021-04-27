import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { StyledTouchableOpacity } from "./styles";

function GoBackArrow() {
  const navigation = useNavigation();

  return (
    <StyledTouchableOpacity onPress={() => navigation.goBack()}>
      <Feather name="chevron-left" size={36} color="#fff" />
    </StyledTouchableOpacity>
  );
}

export default GoBackArrow;
