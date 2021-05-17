import React, { useState } from "react";
import { Image, TouchableWithoutFeedback } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Feather } from "@expo/vector-icons";

import BottomDivider from "../../components/BottomDivider";

import {
  Container,
  Header,
  Content,
  PickerView,
  StyledPicker,
  InputWithIcon,
  InputIcon,
  Input,
  Title,
  SubmitButton,
  SubmitButtonText,
} from "./styles";

import MoneyBagIcon from "../../assets/images/money-bag.png";

import api from "../../services/api";

import { toasts } from "../../utils/toasts";
import { formatBalance, convertBalanceToNumber } from "./utils/formatBalance";
import currencyCodes from "./utils/currencyCodes.json";

function CreateWallet({ title }) {
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState(null);
  const [balance, setBalance] = useState("");

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
    }
  }

  return (
    <Container>
      <Header>
        <Title>{title || "Vamos criar sua primeira carteira!"}</Title>
      </Header>

      <Content>
        <InputWithIcon first>
          <InputIcon>
            <Feather name="edit" color="#8900f2" size={24} />
          </InputIcon>
          <Input
            value={name}
            onChangeText={setName}
            placeholder="Nome"
            editable
          />
        </InputWithIcon>

        <TouchableWithoutFeedback onPress={() => console.log("hhh")}>
          <InputWithIcon>
            <InputIcon>
              <Image source={MoneyBagIcon} />
            </InputIcon>
            <PickerView>
              <StyledPicker
                selectedValue={currency}
                onValueChange={value => setCurrency(value)}
                mode="dialog"
                prompt="Escolha a moeda da sua carteira"
              >
                <Picker.Item label="Moeda" value={null} />
                {Object.keys(currencyCodes).map(key => (
                  <Picker.Item
                    key={key}
                    label={key}
                    value={currencyCodes[key]}
                  />
                ))}
              </StyledPicker>
            </PickerView>
          </InputWithIcon>
        </TouchableWithoutFeedback>

        <InputWithIcon>
          <InputIcon>
            <Feather name="dollar-sign" color="#8900f2" size={24} />
          </InputIcon>
          <Input
            value={balance}
            onChangeText={text =>
              setBalance(formatBalance(text, currency.symbol))
            }
            placeholder="Valor da carteira"
            keyboardType="numeric"
            editable={!!currency}
          />
        </InputWithIcon>

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Criar carteira</SubmitButtonText>
        </SubmitButton>

        <BottomDivider />
      </Content>
    </Container>
  );
}

export default CreateWallet;
