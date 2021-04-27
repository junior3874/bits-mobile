import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fcfcfc;
`;

export const Header = styled.View`
  background-color: #8900f2;
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  margin-top: 16px;
`;

export const Filter = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px 16px;
`;

export const FilterText = styled.Text`
  font-size: 16px;
  color: #333;
  margin-left: 12px;
`;

export const ImageWrapper = styled.View`
  margin-top: 18px;
  margin-bottom: 18px;
  align-items: center;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 18px;
  color: #333;
  margin-left: 6px;
`;

export const SearchBar = styled.View`
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-top: 32px;
  position: relative;
  flex: 1;
`;

export const SearchBarIcon = styled.View`
  position: absolute;
  top: 0%;
  left: 0%;
  justify-content: center;
  height: 48px;
  margin-left: 8px;
`;

export const SearchBarInput = styled.TextInput`
  padding-left: 40px;
  height: 48px;
`;
