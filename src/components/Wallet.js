import React from "react";
import Icon from "react-native-vector-icons/Feather";

import {
  Container,
  FlexRowSpacedBetween,
  Name,
  Value,
} from "../styles/components/wallet";

function Wallet({ walletName, walletValue }) {
  return (
    <Container
      colors={["#8900f2", "#2d00f7"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.95 }}
    >
      <FlexRowSpacedBetween>
        <Name>{walletName}</Name>

        <Icon name="more-vertical" size={24} color="#fff" />
      </FlexRowSpacedBetween>

      <FlexRowSpacedBetween marginTop>
        <Value>{walletValue}</Value>

        <Icon name="chevron-right" size={24} color="#fff" />
      </FlexRowSpacedBetween>
    </Container>
  );
}

export default Wallet;
