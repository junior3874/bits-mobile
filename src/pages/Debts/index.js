import React from "react";
import { useNavigation } from "@react-navigation/native";
import DebtComponent from "../../components/Debt";

import {
  Container,
  Content,
  Header,
  IconArrow,
  MoreOptions,
  HeaderIconBottom,
  SearchArea,
  SearchIconArea,
  SearchInputArea,
  DebtsTitle,
  IconArrowView,
} from "./styles";

import LeftArrow from "../../assets/images/left-arrow.png";
import MoreIcon from "../../assets/images/more.png";
import SearchIcon from "../../assets/images/search.png";
import HeaderImage from "../../assets/images/DebtsHeaderIcon.png";

function Debts() {
  const navigation = useNavigation();

  function navegatePage(pageName) {
    return navigation.navigate(pageName);
  }
  return (
    <Container>
      <Header>
        <IconArrowView
          onPress={() => {
            navegatePage("Overview");
          }}
        >
          <IconArrow source={LeftArrow} />
        </IconArrowView>
        <MoreOptions source={MoreIcon} />
        <HeaderIconBottom source={HeaderImage} />
      </Header>
      <Content>
        <SearchArea>
          <SearchIconArea source={SearchIcon} />
          <SearchInputArea placeholder="Procure por uma divida!" />
        </SearchArea>
        <DebtsTitle>Dividas</DebtsTitle>

        <DebtComponent
          name="Pagar aluguel"
          necessary={1000}
          have={500}
          deadline="24/01 até 23/02"
        />

        <DebtComponent
          name="Pagar pc"
          necessary={3500}
          have={500}
          deadline="24/01 até 23/03"
        />
      </Content>
    </Container>
  );
}

export default Debts;
