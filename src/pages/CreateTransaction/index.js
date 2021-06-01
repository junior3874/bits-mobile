import React, { useState, useEffect, useContext, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import api from "../../services/api";
import {
  formatBalance,
  convertBalanceToNumber,
} from "../../utils/formatBalance";
import currencyCodes from "../../utils/currencyCodes.json";
import { toasts } from "../../utils/toasts";
import { WalletContext } from "../../contexts/walletContext";

import Header from "../../components/Header";
import InputField from "../../components/InputField";
import InputFieldPicker from "../../components/InputFieldPicker";
import Button from "../../components/Button";
import WalletFlatList from "../../components/WalletFlatList";
import GoBackArrow from "../../components/GoBackArrow";

import CategoryIcon from "../../assets/images/category.png";

import {
  Container,
  ContentPadding,
  WalletPickerLabel,
  ButtonsContainer,
} from "./styles";

function CreateTransaction() {
  const { selectedWallet, fetchWallets } = useContext(WalletContext);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const navigation = useNavigation();

  const currencySymbol = useMemo(
    () => currencyCodes[selectedWallet.currency].symbol,
    [selectedWallet]
  );

  useEffect(() => setAmount(""), [selectedWallet]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await api
        .get("/categories")
        .then(res => ({ data: res.data }))
        .catch(err => ({ err: true, message: err.message }));

      const normalizedResponse = response.data.categories.map(c => ({
        key: c.id.toString(),
        label: c.name,
        value: c.id,
      }));
      setCategories(normalizedResponse);
    }

    fetchCategories();
  }, []);

  async function handleSubmit() {
    const amountNumber = convertBalanceToNumber(amount, currencySymbol);

    if (amountNumber === 0 || !selectedCategory) {
      showError();
      return;
    }

    const data = {
      walletId: selectedWallet.id,
      categoryId: selectedCategory,
      description,
      amount: amountNumber,
    };

    const response = await api
      .post("/transactions", data)
      .then(res => ({ data: res.data }))
      .catch(err => ({ err: true, message: err.message }));

    if (response.err) {
      showError();
    } else {
      setSelectedCategory(null);
      setDescription("");
      setAmount("");
      fetchWallets();
      toasts.success("Transação criada com sucesso!");
    }
  }

  function showError() {
    toasts.error("Falha ao criar transação!");
  }

  return (
    <Container>
      <GoBackArrow />

      <Header title="Adicionar transação" />

      <ContentPadding>
        <WalletPickerLabel>Carteira escolhida:</WalletPickerLabel>
      </ContentPadding>
      <WalletFlatList />

      <ContentPadding>
        <InputFieldPicker
          leftIcon={() => <Image source={CategoryIcon} />}
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          title="Escolha a categoria"
          placeholder="Categoria"
          data={categories}
        />

        <InputField
          leftIcon={() => <Feather name="edit" size={20} color="#8900f2" />}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          editable={!!selectedCategory}
          contentStyle={{ height: 50 }}
        />

        <InputField
          leftIcon={() => (
            <Feather name="dollar-sign" color="#8900f2" size={24} />
          )}
          value={amount}
          placeholder="Valor"
          onChangeText={text => {
            const formatted = formatBalance(text, currencySymbol);

            if (formatted) {
              setAmount(formatted);
            }
          }}
          keyboardType="numeric"
          contentStyle={{ height: 50 }}
          editable={!!selectedCategory}
        />

        <ButtonsContainer>
          <Button
            title="Cancelar"
            variant="outline"
            variantColor="#8900f2"
            style={{ width: "46%" }}
            onPress={() => navigation.goBack()}
          />

          <Button
            title="Criar transação"
            variant="filled"
            variantColor="#8900f2"
            style={{ width: "46%" }}
            onPress={() => handleSubmit()}
          />
        </ButtonsContainer>
      </ContentPadding>
    </Container>
  );
}

export default CreateTransaction;
