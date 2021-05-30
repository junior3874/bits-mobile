import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  margin: 16px 0;
  border: 2px solid #c5c5c5;
  border-radius: 5px;
  flex-direction: row;
`;

export const Icon = styled.View`
  align-self: center;
  margin-left: 16px;
  margin-right: 20px;
  width: 20px;
  height: 20px;
`;

export const PickerView = styled.View`
  height: 50px;
  flex: 1;
`;

export const StyledPicker = styled(Picker)`
  height: 50px;
  margin-left: -8px;
`;
