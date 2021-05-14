import styled from "styled-components/native";
import HeaderImage from "../../assets/images/DebtsHeaderIcon.png";
export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f9f9f9;
`;
export const Content = styled.View`
  padding: 0 10px;
  margin-bottom: 150px;
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

export const DebtsTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 32px;

  /* identical to box height */

  /* Roxo */
  color: #8900f2;
  margin-bottom: 20px;
`;
export const IconArrowView = styled.TouchableOpacity``;
