import React, { useContext, useEffect, useState } from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";
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

import { formatBalance } from "../../utils/formatBalance";

function Overview() {
  const [walletSummary, setWalletSummary] = useState({
    expenses: 0,
    incomes: 0,
    balance: 0,
  });
  const { username } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    redirectUserIfNoWalletIsFound();
    fetchWalletSummary();
  }, []);

  async function redirectUserIfNoWalletIsFound() {
    const response = await api
      .get("/wallet")
      .then(res => ({ error: false, data: res.data }))
      .catch(err => ({ error: true, err }));

    if (response.error) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "CreateWallet",
              params: {
                title: "Vamos criar sua primeira carteira!",
                canGoBack: true,
              },
            },
          ],
        })
      );
    }
  }

  async function fetchWalletSummary() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    const response = await api
      .get(`/transactions/index/month?year=${year}&month=${month}`)
      .then(res => ({ error: false, data: res.data }))
      .catch(err => ({ error: true, err }));

    if (!response.error) {
      const { expenses, incomes } = response.data.expensesAndIncome;

      setWalletSummary({
        expenses: expenses * 100,
        incomes: incomes * 100,
        balance: 0, // TODO
      });
    }
  }

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
              <InfoCardItemValue>
                {formatBalance(walletSummary.incomes, "R$")}
              </InfoCardItemValue>
            </InfoCardItem>

            <InfoCardItem>
              <Feather name="minus-square" size={20} color="#8900f2" />
              <InfoCardItemTitle>Despesas</InfoCardItemTitle>
              <InfoCardItemValue>
                {formatBalance(walletSummary.expenses, "R$")}
              </InfoCardItemValue>
            </InfoCardItem>

            <InfoCardItem last>
              <Feather name="dollar-sign" size={20} color="#8900f2" />
              <InfoCardItemTitle>Saldo</InfoCardItemTitle>
              <InfoCardItemValue bold>
                {formatBalance(walletSummary.balance, "R$")}
              </InfoCardItemValue>
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
