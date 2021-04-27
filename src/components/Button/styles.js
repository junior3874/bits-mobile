import styled from "styled-components/native";

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${({ variant, variantColor }) =>
    variant === "filled" ? variantColor : "transparent"};
  border: 1.6px solid ${({ variantColor }) => variantColor};
  border-radius: 10px;
  padding: 16px;
  margin: 16px auto;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ variant, variantColor }) =>
    variant === "filled" ? "#fff" : variantColor};
  text-align: center;
  font-size: 18px;
`;
