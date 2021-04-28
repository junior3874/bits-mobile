import React from "react";
import { Text } from "react-native";

import { StyledTouchableOpacity, Title } from "./styles";

function Button({ variant, variantColor, onPress, title }) {
  return (
    <StyledTouchableOpacity
      variant={variant}
      variantColor={variantColor}
      onPress={onPress}
    >
      <Title variant={variant} variantColor={variantColor}>
        {title}
      </Title>
    </StyledTouchableOpacity>
  );
}

export default Button;
