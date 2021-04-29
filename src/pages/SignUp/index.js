import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { AuthContext } from "../../contexts/authContext";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import HeaderImage from "../../components/HeaderImage";
import GoBackArrow from "../../components/GoBackArrow";

import {
  Container,
  Content,
  Heading,
  Paragraph,
  ForgotPasswordText,
} from "./styles";

function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function handleSignUp() {
    const data = {
      name,
      email,
      password,
    };

    const response = await signUp(data);
    if (response.error) {
      showError();
      return;
    }

    showSuccess();
    navigation.navigate("SignIn");
  }

  function showError() {
    Toast.show({
      type: "error",
      text1: "Erro",
      text2: "Falha ao fazer cadastro!",
    });
  }

  function showSuccess() {
    Toast.show({
      type: "success",
      text1: "Successo",
      text2: "Cadastro feito com sucesso!",
    });
  }

  return (
    <Container>
      <HeaderImage />
      <GoBackArrow />

      <Content>
        <Heading>Olá</Heading>
        <Paragraph>Coloque seus dados e crie sua conta.</Paragraph>

        <InputField
          leftIcon={() => <Feather name="user" size={18} color="#8900f2" />}
          value={name}
          placeholder="Nome"
          onChangeText={text => setName(text)}
          autoCorrect={false}
        />

        <InputField
          leftIcon={() => <Feather name="mail" size={18} color="#8900f2" />}
          value={email}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCorrect={false}
        />

        <InputField
          leftIcon={() => <Feather name="lock" size={18} color="#8900f2" />}
          value={password}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          secureTextEntry
          autoCorrect={false}
        />

        <TouchableOpacity>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </TouchableOpacity>

        <Button
          variant="filled"
          variantColor="#8900F2"
          title="Criar conta"
          style={{ marginTop: 64 }}
          onPress={handleSignUp}
        />
      </Content>
    </Container>
  );
}

export default SignUp;
