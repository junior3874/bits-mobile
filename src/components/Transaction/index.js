import React, { useMemo } from "react";
import { Text, View, StyleSheet } from "react-native";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import {
  Container,
  IconRight,
  Content,
  LeftContent,
  CameAndGo,
  TransactionAmount,
  Amount,
  RightContent,
  TransactionDate,
} from "./styles";

import WalletIcon from "../../assets/images/WalletIcon.png";

function Transaction({ amount, date, walletName }) {
  console.log("renderizado");
  const formattedDate = useMemo(
    () => format(new Date(date), "d 'de' MMMM", { locale: ptBR }),
    [date]
  );

  const amountPositive = amount < 0;
  return (
    <Container>
      <IconRight source={WalletIcon} />
      <Content>
        <LeftContent>
          <CameAndGo>{walletName}</CameAndGo>
          <TransactionAmount>
            <Text style={styled.text}>R$</Text>
            <Amount type={amountPositive}>
              {amountPositive ? `  ${amount}` : `  +${amount}`}
            </Amount>
          </TransactionAmount>
        </LeftContent>
        <RightContent>
          <View style={styled.view} />
          <TransactionDate>{formattedDate}</TransactionDate>
        </RightContent>
      </Content>
    </Container>
  );
}

const styled = StyleSheet.create({
  view: {
    backgroundColor: "#8900F2",
    width: 15,
    height: 3,

    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 23,
    color: "#333333",
    marginRight: 12,
  },
});

export default React.memo(Transaction);
