import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  margin: 16px 0;
`;

export const Icon = styled.View`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 4;
`;

export const PickerView = styled.View`
  height: 50px;
  border: 2px solid #c5c5c5;
  border-radius: 5px;
  padding-left: 60px;
  position: relative;
`;

export const StyledPicker = styled(Picker)`
  height: 50px;
  margin-top: -2px;
  margin-left: -10px;
`;
