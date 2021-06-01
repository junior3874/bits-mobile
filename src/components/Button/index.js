import React from "react";

import { StyledTouchableOpacity, Title } from "./styles";

function Button({ variant, variantColor, onPress, title, ...rest }) {
  return (
    <StyledTouchableOpacity
      variant={variant}
      variantColor={variantColor}
      onPress={onPress}
      {...rest}
    >
      <Title variant={variant} variantColor={variantColor}>
        {title}
      </Title>
    </StyledTouchableOpacity>
  );
}

export default Button;
