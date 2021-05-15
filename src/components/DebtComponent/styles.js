import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  margin-bottom: 35px;
`;

export const TopContent = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
export const CashIconArea = styled.View`
  background: #f7f7f7;
  border-radius: 10px;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
`;
export const CashIcon = styled.Image``;
export const PercentDebt = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 32px;

  /* identical to box height */

  /* Roxo */
  color: #8900f2;
  margin-top: 15px;
`;
export const DeadlineDebt = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  /* Cinza */
  color: #bfbfbf;
`;

export const DebtName = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  /* Preto */
  color: #333333;
  margin-top: 32px;
`;
export const DebtProgressArea = styled.View`
  margin-top: 32px;
`;
export const ContentDebtProgressBar = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
export const LeftNumber = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  /* Preto */
  color: #333333;
`;
export const MidNumber = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;

  /* Preto */
  color: #333333;
`;
export const RightNumber = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;

  /* Roxo */
  color: #8900f2;
`;
export const DebtProgressBar = styled.View`
  height: 3px;
  width: 100%;
  background: #c4c4c4;
  border-radius: 5px;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const ContentDebtProgressBard = styled.View`
  width: ${props => props.percent && `${props.percent}%`};
  background: #8900f2;
  height: 100%;
  border-radius: 5px;
`;

export const PayOrCancelArea = styled.View`
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;
export const ConfirmButton = styled.View`
  width: 40px;
  height: 40px;
  background: #8900f2;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 21px;
`;
export const ConfirmButtonIcon = styled.Image``;
export const CancelButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1.5px solid #8900f2;

  border-radius: 10px;
`;
export const CancelButtonIcon = styled.Image``;
