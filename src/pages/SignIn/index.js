import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

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

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <HeaderImage />
      <GoBackArrow />

      <Content>
        <Heading>Seja bem-vindo!</Heading>
        <Paragraph>É bom ter você aqui.</Paragraph>

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
          title="Entrar"
          style={{ marginTop: 64 }}
        />
      </Content>
    </Container>
  );
}

export default SignIn;
