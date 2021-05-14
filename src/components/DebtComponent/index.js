import React from "react";

import {
  Container,
  TopContent,
  CashIconArea,
  CashIcon,
  PercentDebt,
  DeadlineDebt,
  DebtName,
  DebtProgressArea,
  ContentDebtProgressBar,
  LeftNumber,
  MidNumber,
  RightNumber,
  DebtProgressBar,
  ContentDebtProgressBard,
  PayOrCancelArea,
  ConfirmButton,
  ConfirmButtonIcon,
  CancelButton,
  CancelButtonIcon,
} from "./styles";

import DebtsIcon from "../../assets/images/debts.png";
import ConfirmIcon from "../../assets/images/confirm.png";
import CancelIcon from "../../assets/images/cancel.png";

function DebtComponent({ name, necessary, have, deadline }) {
  const percent = Math.round((have / necessary) * 100);
  return (
    <Container>
      <TopContent>
        <CashIconArea>
          <CashIcon source={DebtsIcon} />
        </CashIconArea>

        <PercentDebt>{percent}%</PercentDebt>
        <DeadlineDebt>{deadline}</DeadlineDebt>
      </TopContent>
      <DebtName>{name}</DebtName>
      <DebtProgressArea>
        <ContentDebtProgressBar>
          <LeftNumber>R$ 0,00</LeftNumber>
          <MidNumber>R$ {have}</MidNumber>
          <RightNumber>R$ {necessary}</RightNumber>
        </ContentDebtProgressBar>
        <DebtProgressBar>
          <ContentDebtProgressBard percent={percent} />
        </DebtProgressBar>
      </DebtProgressArea>

      <PayOrCancelArea>
        <ConfirmButton>
          <ConfirmButtonIcon source={ConfirmIcon} />
        </ConfirmButton>
        <CancelButton>
          <CancelButtonIcon source={CancelIcon} />
        </CancelButton>
      </PayOrCancelArea>
    </Container>
  );
}

export default DebtComponent;
