import React, { useContext, useEffect, useState, useMemo } from "react";
import {
  useNavigation,
  CommonActions,
  useIsFocused,
} from "@react-navigation/native";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import api from "../../services/api";
import transactionsImg from "../../assets/images/left-and-right-arrow.png";
import debtsImg from "../../assets/images/debts.png";
import budgetsImg from "../../assets/images/budgets.png";
import curvedPurpleBackgroundImg from "../../assets/images/curved-purple-background.png";

import { AuthContext } from "../../contexts/authContext";
import { WalletContext } from "../../contexts/walletContext";

import {
  Container,
  HeaderImage,
  ContentPadding,
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
  AddWallet,
  HeadingInfo,
  InfoCard,
  InfoCardItem,
  InfoCardItemTitle,
  InfoCardItemValue,
} from "./styles";

import BottomDivider from "../../components/BottomDivider";
import Chart from "../../components/Chart";
import WalletFlatList from "../../components/WalletFlatList";

import { formatBalance } from "../../utils/formatBalance";

function Overview() {
  const { wallets, selectedWallet } = useContext(WalletContext);
  const { username } = useContext(AuthContext);
  const [walletSummaries, setWalletSummaries] = useState({});
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const selectedWalletFormattedBalance = useMemo(() => {
    const { balance, currencySymbol } = selectedWallet;
    return formatBalance(balance, currencySymbol);
  }, [selectedWallet]);

  const incomes = useMemo(() => {
    const walletSummary = walletSummaries[selectedWallet.id];
    return formatBalance(walletSummary?.incomes, selectedWallet.currencySymbol);
  }, [walletSummaries, selectedWallet]);

  const expenses = useMemo(() => {
    const walletSummary = walletSummaries[selectedWallet.id];
    return formatBalance(
      walletSummary?.expenses,
      selectedWallet.currencySymbol
    );
  }, [walletSummaries, selectedWallet]);

  useEffect(() => {
    if (!wallets) {
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
  }, [wallets]);

  useEffect(() => {
    fetchWalletSummaries();
  }, [isFocused]);

  async function fetchWalletSummaries() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    const response = await api
      .get(`/transactions/index/month?year=${year}&month=${month}`)
      .then(res => ({ error: false, data: res.data }))
      .catch(err => ({ error: true, err }));

    if (!response.error) {
      setWalletSummaries(response.data.expensesAndIncome);
    }
  }

  function navigatePage(pageName) {
    return navigation.navigate(pageName);
  }

  return (
    <Container>
      <HeaderImage source={curvedPurpleBackgroundImg} />

      <ContentPadding>
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

            <MenuItem onPress={() => navigatePage("Debts")}>
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
              <InfoCardItemValue>{incomes}</InfoCardItemValue>
            </InfoCardItem>

            <InfoCardItem>
              <Feather name="minus-square" size={20} color="#8900f2" />
              <InfoCardItemTitle>Despesas</InfoCardItemTitle>
              <InfoCardItemValue>{expenses}</InfoCardItemValue>
            </InfoCardItem>

            <InfoCardItem last>
              <Feather name="dollar-sign" size={20} color="#8900f2" />
              <InfoCardItemTitle>Saldo</InfoCardItemTitle>
              <InfoCardItemValue bold>
                {selectedWalletFormattedBalance}
              </InfoCardItemValue>
            </InfoCardItem>
          </InfoCard>
        </Info>

        <RowSpacedBetween>
          <Heading>Carteira</Heading>
          <AddWallet onPress={() => navigatePage("CreateWallet")}>
            <Feather name="plus" size={24} color="#8900f2" />
          </AddWallet>
        </RowSpacedBetween>
      </ContentPadding>

      {isFocused ? <WalletFlatList /> : null}

      <ContentPadding>
        <RowSpacedBetween>
          <Heading>Balanço</Heading>
          <HeadingInfo>Fevereiro</HeadingInfo>
        </RowSpacedBetween>

        <Chart />
      </ContentPadding>

      <BottomDivider />
    </Container>
  );
}

export default Overview;
