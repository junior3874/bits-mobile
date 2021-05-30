import React, { useState, useContext } from "react";
import {
  useRoute,
  useNavigation,
  CommonActions,
} from "@react-navigation/native";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { WalletContext } from "../../contexts/walletContext";

import Header from "../../components/Header";
import InputField from "../../components/InputField";
import InputFieldPicker from "../../components/InputFieldPicker";
import GoBackArrow from "../../components/GoBackArrow";
import BottomDivider from "../../components/BottomDivider";

import { Container, Content, SubmitButton, SubmitButtonText } from "./styles";

import MoneyBagIcon from "../../assets/images/money-bag.png";

import api from "../../services/api";

import { toasts } from "../../utils/toasts";
import {
  formatBalance,
  convertBalanceToNumber,
} from "../../utils/formatBalance";
import currencyCodes from "../../utils/currencyCodes.json";

function CreateWallet() {
  const { fetchWallets } = useContext(WalletContext);
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState(null);
  const [balance, setBalance] = useState("");
  const route = useRoute();
  const navigation = useNavigation();

  async function handleSubmit() {
    const data = {
      name,
      balance: convertBalanceToNumber(balance, currency.symbol),
      currency: currency.key,
    };

    const response = await api
      .post("wallet", data)
      .then(res => ({ status: res.status, body: res.data }))
      .catch(err => ({ error: true, message: err.message }));

    if (response.error) {
      toasts.error("Falha ao criar carteira!");
      return;
    }

    fetchWallets();

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "Overview",
          },
        ],
      })
    );
  }

  return (
    <Container>
      {!route.params?.canGoBack && <GoBackArrow />}

      <Header title={route.params?.title || "Criar nova carteira!"} />

      <Content>
        <InputField
          leftIcon={() => <Feather name="edit" size={20} color="#8900f2" />}
          value={name}
          placeholder="Nome"
          onChangeText={setName}
          contentStyle={{ height: 50 }}
        />

        <InputFieldPicker
          leftIcon={() => <Image source={MoneyBagIcon} />}
          value={currency}
          onValueChange={value => setCurrency(value)}
          title="Escolha a moeda da sua carteira"
          placeholder="Moeda"
          data={Object.keys(currencyCodes).map(key => ({
            key,
            label: key,
            value: currencyCodes[key],
          }))}
        />

        <InputField
          leftIcon={() => (
            <Feather name="dollar-sign" color="#8900f2" size={24} />
          )}
          value={balance}
          placeholder="Valor"
          onChangeText={text => {
            const formatted = formatBalance(text, "R$");

            if (formatted) {
              setBalance(formatted);
            }
          }}
          keyboardType="numeric"
          contentStyle={{ height: 50 }}
          editable={!!currency}
        />

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Criar carteira</SubmitButtonText>
        </SubmitButton>

        <BottomDivider />
      </Content>
    </Container>
  );
}

export default CreateWallet;
