import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  border-radius: 20px;
  padding: 16px;
`;

export const FlexRowSpacedBetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${props => (props.marginTop ? "24px" : 0)};
`;

export const Name = styled.Text`
  font-size: 25px;
  color: #fff;
`;

export const Value = styled.Text`
  font-size: 28px;
  color: #fff;
`;
