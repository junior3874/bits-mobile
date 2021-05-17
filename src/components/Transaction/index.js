import React from "react";
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

import { Text, View, StyleSheet } from "react-native";
import WalletIcon from "../../assets/images/WalletIcon.png";
function Transaction({ amount, date }) {
  return (
    <Container>
      <IconRight source={WalletIcon} />
      <Content>
        <LeftContent>
          <CameAndGo>Carteira {">"} sabesp</CameAndGo>
          <TransactionAmount>
            <Text style={styled.text}>R$</Text>
            <Amount type={amount < 0}>
              {amount < 0 ? `  ${amount}` : `  +${amount}`}
            </Amount>
          </TransactionAmount>
        </LeftContent>
        <RightContent>
          <View style={styled.view} />
          <TransactionDate>{date}</TransactionDate>
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
  },
});

export default Transaction;
