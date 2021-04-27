import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #8900f2;
  height: 200px;
`;

export const HeaderImage = styled.Image`
  width: 19px;
  height: 25px;
  margin-right: -9.5px;
  margin-top: 24px;
  align-self: center;
`;

export const Greetings = styled.Text`
  color: #fff;
  font-size: 25px;
`;

export const GreetingsBold = styled.Text`
  font-weight: bold;
`;

export const Menu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -48px;
`;

export const MenuItem = styled.View`
  width: 28%;
  height: 96px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
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

export const MainContent = styled.View`
  padding: 16px;
  padding-top: 0;
`;

export const OverviewContainer = styled.View`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const OverviewInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const OverviewText = styled.Text`
  font-size: 18px;
  color: #8900f2;
`;

export const OverviewDate = styled.Text`
  font-size: 18px;
`;

export const OverviewContent = styled.View`
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const OverviewContentItem = styled.View`
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  margin-top: ${(props) => (props.column ? '12px' : '12px')};
  align-items: center;
`;

export const OverviewContentItemProperty = styled.Text`
  font-size: ${(props) => (props.bigger ? '20px' : '16px')};
  margin-top: ${(props) => (props.bigger ? '-2px' : '0')};
  color: #999;
`;

export const OverviewContentItemValue = styled.Text`
  font-weight: bold;
  font-size: ${(props) => (props.bigger ? '20px' : '16px')};
  color: ${(props) => (props.coloured ? '#8900f2' : '#333')};
  margin-top: ${(props) => (props.bigger ? '3px' : '0')};
  margin-left: 8px;
`;

