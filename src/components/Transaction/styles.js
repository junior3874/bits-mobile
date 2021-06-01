import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 35px;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
`;

export const IconRight = styled.Image`
  margin: 20px 50px 20px 25px;
  
  align-items: center;
  justify-content; cen
`;
export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
export const LeftContent = styled.View``;

export const CameAndGo = styled.Text`
  margin-bottom: 18px;
`;
export const TransactionAmount = styled.Text`
  flex-direction: row;
`;

export const Amount = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;

  color: ${({ type }) => (type ? "#FF7E67" : "#28DF99")};
`;

export const RightContent = styled.View`
  justify-content: space-between;
  align-items: flex-end;
`;
export const TransactionDate = styled.Text``;
