import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../../contexts/authContext";
import Button from "../../components/Button";
import {
  Container,
  Content,
  Logo,
  Hero,
  GroupingView,
  Heading,
} from "./styles";

import LogoImg from "../../assets/images/B.png";
import HeroImg from "../../assets/images/finance.png";

function Home() {
  const { loading } = useContext(AuthContext);
  const navigation = useNavigation();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return (
    <Container>
      <Content>
        <Logo source={LogoImg} />
        <Hero source={HeroImg} />
        <GroupingView>
          <Heading>Organize suas finanças de forma rápida e fácil.</Heading>
          <Button
            variant="outline"
            variantColor="#8900f2"
            onPress={() => navigation.navigate("SignIn")}
            title="Entrar"
          />
          <Button
            variant="filled"
            variantColor="#8900f2"
            onPress={() => navigation.navigate("SignUp")}
            title="Criar conta"
          />
        </GroupingView>
      </Content>
    </Container>
  );
}

export default Home;
