import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background-color: #fff;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const LeftIconView = styled.View`
  width: 10%;
`;

export const LeftIcon = styled.View`
  width: 32px;
  height: 32px;
  background-color: ${({ type }) =>
    type === "ok" ? "#a2f5d5" : type === "warning" ? "#ffeea8" : "#ffb5a8"};
  border-radius: 16px;
`;

export const RightInfo = styled.View`
  width: 85%;
`;

export const Description = styled.Text`
  font-family: Circular Std;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  /* Preto */
  color: #333333;
`;

export const TimeAgo = styled.Text`
  font-family: Circular Std;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-top: 10px;

  /* Cinza */
  color: #bfbfbf;
`;
