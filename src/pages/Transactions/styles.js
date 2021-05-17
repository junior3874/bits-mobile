import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
`;

export const ContainerFlatList = styled.FlatList``;
export const Content = styled.View`
  padding: 0 10px;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  background-color: #8900f2;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 20px 10px;
`;

export const IconArrow = styled.Image`
  width: 16px;
  height: 16px;
`;

export const MoreOptions = styled.Image`
  width: 16px;
  height: 16px;
`;

export const HeaderIconBottom = styled.Image`
  position: absolute;
  bottom: 10;
  right: 10;
`;

export const SearchArea = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: F2F2F2;
  background: #f2f2f2;
  border-radius: 10px;
  height: 50px;
  align-items: center;
  margin: 26px auto;
`;
export const SearchIconArea = styled.Image`
  width: 26px;
  height: 26px;
  margin: 0 15px;
`;
export const SearchInputArea = styled.TextInput`
  flex: 1;
`;
export const IconArrowView = styled.TouchableOpacity``;

export const PageName = styled.Text``;
export const FilterContent = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

export const FilterArea = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  background-color: #8900f2;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  border: 1px solid white;
  border-radius: 16px;
`;
export const FilterDate = styled.Text`
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  /* identical to box height */

  color: #ffffff;
`;
