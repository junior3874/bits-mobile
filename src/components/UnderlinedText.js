import React from "react";

import { Text } from "react-native";
import {
  Container,
  HalvedBottomBorder,
} from "../styles/components/underlinedText";

function UnderlinedText({
  textSize,
  textWeight,
  textColor,
  borderWidth,
  borderColor,
  borderPosition = "center",
  borderShown,
  children,
  ...rest
}) {
  return (
    <Container>
      <Text
        {...rest}
        style={{
          fontSize: textSize,
          fontWeight: textWeight,
          color: textColor,
        }}
      >
        {children}
      </Text>
      <HalvedBottomBorder
        width={borderWidth}
        shown={borderShown}
        position={borderPosition}
      />
    </Container>
  );
}

export default UnderlinedText;
