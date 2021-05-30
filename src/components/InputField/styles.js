import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin: 16px 0;
  opacity: ${({ editable }) => (!editable ? "0.7" : "1")};
  background-color: ${({ editable }) =>
    !editable ? "#e5e5e5" : "transparent"};
`;

export const Content = styled.View`
  align-items: center;
  border: 2px solid #d5d5d5;
  border-radius: 5px;
  flex-direction: row;
  height: 64px;
  width: 100%;
  position: relative;
`;

export const LeftIconView = styled.View`
  display: ${props => (props.active ? "none" : "flex")};
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
  margin-left: ${props => (props.active ? "16px" : 0)};
`;

const notFocused = css`
  font-size: 16px;
  color: #bfbfbf;
`;

const focused = css`
  position: absolute;
  background-color: #fcfcfc;
  padding: 0 8px;
  top: 0%;
  left: 0%;
  font-size: 14px;
  margin-top: -9px;
  margin-left: 32px;
  color: #8900f2;
`;

export const InputPlaceholder = styled.Text`
  ${({ active }) => (active ? focused : notFocused)};
`;
