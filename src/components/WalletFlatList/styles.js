import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wallet = styled.View`
  margin: 16px;
  border-radius: 20px;
  elevation: 8;
  flex: 1;
  transform: ${({ active, single }) =>
    !active || single ? "scale(1)" : "scale(1.05)"};
  opacity: ${({ active, single }) => (single || active ? 1 : 0.6)};
  ${({ single }) => !single && "width: 340px"};
`;

export const WalletGradient = styled(LinearGradient).attrs(_ => ({
  colors: ["#8900f2", "#2d00f7"],
  start: { x: 0, y: 0 },
  end: { x: 0.75, y: 1 },
}))`
  padding: 24px;
  border-radius: 20px;
`;

export const WalletTitle = styled.Text`
  font-size: 24px;
  color: #fff;
  margin-bottom: 48px;
`;

export const WalletBalance = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

export const WalletCurrency = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #bbb;
`;

export const RowSpacedBetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
