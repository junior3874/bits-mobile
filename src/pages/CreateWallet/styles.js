import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.ScrollView.attrs(_ => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background: #fcfcfc;
`;

export const Header = styled.View`
  width: 100%;
  height: 162px;
  background: #8900f2;
  padding: 16px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  position: absolute;
  bottom: 16px;
  left: 16px;
`;

export const Content = styled.View`
  padding: 16px;
  margin-top: 48px;
`;

export const PickerView = styled.View`
  height: 50px;
  border: 2px solid #c5c5c5;
  border-radius: 5px;
  padding-left: 48px;
  position: relative;
`;

export const StyledPicker = styled(Picker)`
  height: 50px;
  margin-top: -2px;
  margin-left: -10px;
`;

export const InputWithIcon = styled.View`
  margin-top: ${({ first }) => (first ? 0 : "40px")};
`;

export const InputIcon = styled.View`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 4;
`;

export const Input = styled.TextInput`
  border: 2px solid #c5c5c5;
  border-radius: 5px;
  height: 50px;
  padding-left: 48px;
  background-color: ${({ editable }) => (editable ? "transparent" : "#d5d5d5")};
`;
export const SubmitButton = styled.TouchableOpacity`
  background-color: #8900f2;
  padding: 16px;
  margin-top: 48px;
  border-radius: 8px;
`;

export const SubmitButtonText = styled.Text`
  text-align: center;
  color: #eee;
  font-size: 20px;
`;
