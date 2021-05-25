import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { View, FlatList } from "react-native";
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
  HeadingInfo,
  InfoCard,
  InfoCardItem,
  InfoCardItemTitle,
  InfoCardItemValue,
  Wallet,
  WalletGradient,
  WalletTitle,
  WalletBalance,
  WalletCurrency,
} from "./styles";

import BottomDivider from "../../components/BottomDivider";
import Chart from "../../components/Chart";

import { formatBalance, removeCurrency } from "../../utils/formatBalance";

function Overview() {
  const [wallets, setWallets] = useState([]);
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(0);
  const [walletSummary, setWalletSummary] = useState({
    expenses: 0,
    incomes: 0,
    balance: 0,
  });
  const { username } = useContext(AuthContext);
  const navigation = useNavigation();

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setSelectedWalletIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        waitForInteraction: true,
        itemVisiblePercentThreshold: 75,
      },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    fetchWallets();
    fetchWalletSummary();
  }, []);

  async function fetchWallets() {
    const response = await api
      .get("/wallet")
      .then(res => ({ error: false, data: res.data }))
      .catch(err => ({ error: true, err }));

    setWallets(response.data);

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
        expenses,
        incomes,
      });
    }
  }

  function navegatePage(pageName) {
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
                {formatBalance(
                  wallets &&
                    wallets[selectedWalletIndex] &&
                    wallets[selectedWalletIndex].balance,
                  "R$"
                )}
              </InfoCardItemValue>
            </InfoCardItem>
          </InfoCard>
        </Info>

        <Heading>Carteira</Heading>
      </ContentPadding>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        keyExtractor={item => item.name}
        data={wallets}
        renderItem={({ item, index }) => (
          <Wallet active={selectedWalletIndex === index}>
            <WalletGradient
              colors={["#8900f2", "#2d00f7"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.75, y: 1 }}
            >
              <WalletTitle>{item.name}</WalletTitle>

              <RowSpacedBetween>
                <WalletBalance>
                  <WalletCurrency>{item.currency} </WalletCurrency>
                  {removeCurrency(
                    formatBalance(item.balance, item.currency),
                    item.currency
                  )}
                </WalletBalance>
              </RowSpacedBetween>
            </WalletGradient>
          </Wallet>
        )}
      />

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
