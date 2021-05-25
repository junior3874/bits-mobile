import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ScrollView.attrs(_ => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: #fcfcfc;
`;

export const HeaderImage = styled.Image`
  width: 100%;
  height: 162px;
`;

export const HeaderContent = styled.View`
  margin-top: -136px;
`;

export const Greetings = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-bottom: 32px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Menu = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuItem = styled.TouchableOpacity`
  width: 29%;
  height: 96px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  elevation: 8;
`;

export const MenuItemIcon = styled.Image`
  align-self: center;
`;

export const MenuItemText = styled.Text`
  text-align: center;
  margin-top: 12px;
  font-size: 16px;
  color: #333;
`;

export const Info = styled.View`
  margin-top: 42px;
  margin-bottom: 30px;
`;

export const RowSpacedBetween = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #8900f2;
`;

export const HeadingInfo = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const InfoCard = styled.View`
  margin-top: 30px;
  background-color: #fff;
  padding: 24px;
  border-radius: 20px;
  elevation: 8;
`;

const InfoCardItemMargin = css`
  margin: ${props => {
    if (props.first) {
      return "8px 0 0";
    }
    if (props.last) {
      return "0 0 8px";
    }
    return "26px 0";
  }};
`;

export const InfoCardItem = styled.View`
  flex-direction: row;
  align-items: center;
  ${InfoCardItemMargin}
`;

export const InfoCardItemTitle = styled.Text`
  margin-left: 20px;
  margin-right: 32px;
  font-size: 18px;
  color: #666;
  width: 80px;
`;

const InfoCardItemValueNormal = css`
  font-size: 18px;
  font-weight: normal;
  color: #333;
`;

const InfoCardItemValueBold = css`
  font-size: 25px;
  font-weight: bold;
  color: #8900f2;
`;

export const InfoCardItemValue = styled.Text`
  ${({ bold }) => (bold ? InfoCardItemValueBold : InfoCardItemValueNormal)}
`;

export const Wallet = styled.View`
  width: 340px;
  margin: 30px 16px;
  border-radius: 20px;
  elevation: 8;
  flex: 1;
  transform: ${({ active }) => (active ? "scale(1.05)" : "scale(1)")};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
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

export const ContentPadding = styled.View`
  padding: 16px;
`;
