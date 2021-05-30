import React from "react";
import { Picker } from "@react-native-picker/picker";

import currencyCodes from "../../utils/currencyCodes.json";

import { Container, Icon, PickerView, StyledPicker } from "./styles";

function InputFiedPicker({
  leftIcon: LeftIcon,
  value,
  onValueChange,
  title,
  data,
}) {
  return (
    <Container>
      <Icon>
        <LeftIcon />
      </Icon>
      <PickerView>
        <StyledPicker
          selectedValue={value}
          onValueChange={onValueChange}
          mode="dialog"
          prompt={title}
        >
          <Picker.Item label="Moeda" value={null} />
          {data.map(item => (
            <Picker.Item key={item.key} label={item.label} value={item.value} />
          ))}
        </StyledPicker>
      </PickerView>
    </Container>
  );
}

export default InputFiedPicker;
