import React, { forwardRef } from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TransactionComponent from "../../components/Transaction";

import {
  Container,
  Content,
  Header,
  IconArrow,
  MoreOptions,
  HeaderIconBottom,
  FilterContent,
  FilterArea,
  FilterDate,
  IconArrowView,
  PageName,
  ContainerFlatList,
} from "./styles/";

import LeftArrow from "../../assets/images/left-arrow.png";
import MoreIcon from "../../assets/images/more.png";
import SearchIcon from "../../assets/images/search.png";
import HeaderImage from "../../assets/images/TransactionsHeaderIcon.png";
import DownArrow from "../../assets/images/down-arrow.png";
import { useState } from "react";
import DatePicker from "../../components/DatePicker";
import { useRef } from "react";
import Transaction from "../../components/Transaction";
import { useCallback } from "react";
import api from "../../services/api";
const Transactions = React.forwardRef(() => {
  const [ficticionData, setFicticionDate] = useState({
    data: [
      {
        id: 1,
        amount: 300,
        date: "21 de maio",
      },
      {
        id: 2,
        amount: 300,
        date: "18 de maio",
      },
      {
        id: 3,
        amount: 3000,
        date: "17 de maio",
      },
      {
        id: 4,
        amount: 256,
        date: "16 de maio",
      },
      {
        id: 5,
        amount: -350,
        date: "15 de maio",
      },
      {
        id: 6,
        amount: 300,
        date: "14 de maio",
      },
      {
        id: 7,
        amount: 300,
        date: "13 de maio",
      },
    ],
    page: 1,
  });

  const dateRef = useRef(null);

  const navigation = useNavigation();

  function navegatePage(pageName) {
    return navigation.navigate(pageName);
  }

  function renderItem({ item }) {
    return <Transaction amount={item.amount} date={item.date} />;
  }

  const scrollProjects = useCallback(async () => {
    // const response = await api.testExample(ficticionData.page);
    // setFicticionDate({
    //   data: [...ficticionData.data, ...response.data],
    //   page: page + 1,
    // });
  }, []);

  function HeaderComponent() {
    return (
      <>
        <Header>
          <IconArrowView
            onPress={() => {
              navegatePage("Overview");
            }}
          >
            <IconArrow source={LeftArrow} />
          </IconArrowView>
          <MoreOptions source={MoreIcon} />
          <HeaderIconBottom source={HeaderImage} />
        </Header>
        <Content>
          <FilterContent
            onPress={() => {
              dateRef.current?.showMode;
            }}
          >
            <DatePicker ref={dateRef} />
          </FilterContent>

          <PageName>Transações</PageName>
        </Content>
      </>
    );
  }
  return (
    <Container>
      <ContainerFlatList
        data={ficticionData.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={scrollProjects}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={HeaderComponent}
      />
    </Container>
  );
});

export default Transactions;
