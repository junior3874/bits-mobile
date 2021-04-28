import React, { useRef, useState, useMemo } from "react";

import { TouchableWithoutFeedback } from "react-native";

import {
  Container,
  Content,
  LeftIconView,
  InputContainer,
  Input,
  InputPlaceholder,
} from "./styles";

function InputField({ leftIcon: LeftIcon, placeholder, value, ...rest }) {
  const inputRef = useRef();
  const [isInputOpen, setIsInputOpen] = useState(false);

  const active = useMemo(() => {
    return isInputOpen || value !== "";
  }, [isInputOpen, value]);

  function setFocusToInput() {
    inputRef.current?.focus();
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setFocusToInput}>
        <Content>
          <LeftIconView active={active}>
            <LeftIcon />
          </LeftIconView>
          <InputContainer>
            <Input
              ref={inputRef}
              onFocus={() => setIsInputOpen(true)}
              onBlur={() => setIsInputOpen(false)}
              active={active}
              {...rest}
            />
            <InputPlaceholder active={active} inputValue={value}>
              {placeholder}
            </InputPlaceholder>
          </InputContainer>
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
}

export default InputField;
