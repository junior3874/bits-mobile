import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import transactionsImg from "../../assets/images/left-and-right-arrow.png";
import debtsImg from "../../assets/images/debts.png";
import budgetsImg from "../../assets/images/budgets.png";
import curvedPurpleBackgroundImg from "../../assets/images/curved-purple-background.png";

import { AuthContext } from "../../contexts/authContext";

import {
  Container,
  HeaderImage,
  Content,
  HeaderContent,
  Greetings,
  Bold,
  Menu,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  Info,
  RowSpacedBetween,
  Heading,
  HeadingInfo,
  InfoCard,
  InfoCardItem,
  InfoCardItemTitle,
  InfoCardItemValue,
  Wallet,
  WalletGradient,
  WalletTitle,
  WalletBalance,
} from "./styles";

import BottomDivider from "../../components/BottomDivider";
import Chart from "../../components/Chart";

function Overview() {
  const { username } = useContext(AuthContext);
  const navigation = useNavigation();

  // useEffect(() => {
  //   (async () => {
  //     const response = await api
  //       .get("/wallet")
  //       .then(res => ({ error: false, data: res.data }))
  //       .catch(err => ({ error: true, err }));

  //     if (response.error) {
  //       navigation.navigate("CreateWallet");
  //     }
  //   })();
  // }, []);

  function navegatePage(pageName) {
    return navigation.navigate(pageName);
  }
  return (
    <Container>
      <HeaderImage source={curvedPurpleBackgroundImg} />

      <Content>
        <HeaderContent>
          <Greetings>
            Olá, <Bold>{username}</Bold>
          </Greetings>

          <Menu>
            <MenuItem>
              <View>
                <MenuItemIcon source={transactionsImg} />
                <MenuItemText>Transações</MenuItemText>
              </View>
            </MenuItem>

            <MenuItem onPress={() => navegatePage("Debts")}>
              <View>
                <MenuItemIcon source={debtsImg} />
                <MenuItemText>Dívidas</MenuItemText>
              </View>
            </MenuItem>

            <MenuItem>
              <View>
                <MenuItemIcon source={budgetsImg} />
                <MenuItemText>Orçamentos</MenuItemText>
              </View>
            </MenuItem>
          </Menu>
        </HeaderContent>

        <Info>
          <RowSpacedBetween>
            <Heading>Visão geral</Heading>
            <HeadingInfo>1 de Fevereiro, 2021</HeadingInfo>
          </RowSpacedBetween>

          <InfoCard>
            <InfoCardItem first>
              <Feather name="plus-square" size={20} color="#8900f2" />
              <InfoCardItemTitle>Receitas</InfoCardItemTitle>
              <InfoCardItemValue>R$ 2.148,23</InfoCardItemValue>
            </InfoCardItem>

            <InfoCardItem>
              <Feather name="minus-square" size={20} color="#8900f2" />
              <InfoCardItemTitle>Despesas</InfoCardItemTitle>
              <InfoCardItemValue>R$ 1.321,47</InfoCardItemValue>
            </InfoCardItem>

            <InfoCardItem last>
              <Feather name="dollar-sign" size={20} color="#8900f2" />
              <InfoCardItemTitle>Saldo</InfoCardItemTitle>
              <InfoCardItemValue bold>R$ 826,76</InfoCardItemValue>
            </InfoCardItem>
          </InfoCard>
        </Info>

        <Heading>Carteira</Heading>

        <Wallet>
          <WalletGradient
            colors={["#8900f2", "#2d00f7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.75, y: 1 }}
          >
            <WalletTitle>Carteira de {username}</WalletTitle>

            <RowSpacedBetween>
              <WalletBalance>R$ 826,76</WalletBalance>
              <Feather name="chevron-right" size={40} color="#fff" />
            </RowSpacedBetween>
          </WalletGradient>
        </Wallet>

        <RowSpacedBetween>
          <Heading>Balanço</Heading>
          <HeadingInfo>Fevereiro</HeadingInfo>
        </RowSpacedBetween>

        <Chart />

        <BottomDivider />
      </Content>
    </Container>
  );
}

export default Overview;
