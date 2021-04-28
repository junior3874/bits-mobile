import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fcfcfc;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 48px;
  padding: 20px;
`;

export const PageName = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: #8900f2;
  margin: 0 auto;
`;

export const GoBackIcon = styled.View`
  width: 32px;
  height: 32px;
  background-color: gray;
`;

export const OptionsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 36px;
  padding: 0 20px;
`;

export const FilterDateView = styled.TouchableOpacity`
  width: 55%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 17px;
  padding: 14px 12px;
  background-color: #8900f2;
  border-radius: 10px;
`;
export const FilterDateViewLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FilterDateIconLeft = styled.View`
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 4px;
  margin-right: 16px;
`;
export const FilterDateText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const FilterDateIconRight = styled.View`
  width: 24px;
  height: 24px;
  background-color: #fff;
`;

export const FilterConfigView = styled.View`
  background: #8900f2;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;

  padding: 14px 12px;

  align-items: center;
  width: 40%;
`;

export const FilterConfigText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const FilterConfigIconRight = styled.View`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin-left: 8px;
`;

export const NotificationAmount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 32px;
`;

export const NotificationAmountIcon = styled.View`
  width: 20px;
  height: 20px;
  background-color: gray;
  margin-right: 16px;
`;

export const NotificationAmountText = styled.Text`
  font-size: 16px;
  color: #bfbfbf;
`;

export const NotificationAmountTextHighlight = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #8900f2;
`;

export const NotificationList = styled.FlatList`
  margin-top: 28px;
`;

export const NotificationSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f2f2f2;
`;
