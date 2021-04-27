import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 32px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  height: 64px;
  position: relative;
`;

export const LeftIconView = styled.View`
  display: ${(props) => (props.active ? 'none' : 'flex')};
  margin-left: 16px;
  margin-right: 20px;
`;

export const InputContainer = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 80%;
  height: 64px;
`;

export const Input = styled.TextInput`
  position: absolute;
  width: 100%;
  margin-left: ${(props) => (props.active ? '16px' : 0)};
`;

const inputPlaceholderNotFocused = css`
  font-size: 16px;
  color: #bfbfbf;
`;

const inputPlaceholderFocused = css`
  position: absolute;
  background-color: #fcfcfc;
  padding: 0 4px;
  top: 0%;
  left: 0%;
  font-size: 14px;
  margin-top: -9px;
  margin-left: 32px;
  color: #8900f2;
`;

export const InputPlaceholder = styled.Text`
  ${(props) => {
    if (props.active) {
      return inputPlaceholderFocused;
    }

    return inputPlaceholderNotFocused;
  }}
`;
