import styled from "styled-components/native";

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${({ variant, variantColor }) =>
    variant === "filled" ? variantColor : "transparent"};
  border: 1px solid #8900f2;
  border-radius: 10px;
  width: 80%;
  padding: 16px;
  margin: 16px auto;
`;

export const Text = styled.Text`
  color: ${({ variant, variantColor }) =>
    variant === "filled" ? "#fff" : variantColor};
  text-align: center;
  font-size: 18px;
`;
