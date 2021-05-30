import React, { useEffect, useState, useMemo, useCallback } from "react";
import { View, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

import api from "../../services/api";

import {
  Container,
  Content,
  Header,
  IconArrow,
  MoreOptions,
  HeaderIconBottom,
  FilterContent,
  IconArrowView,
  PageName,
  ContainerFlatList,
  ContentArea,
  DateTimePickerContainer,
} from "./styles";

import LeftArrow from "../../assets/images/left-arrow.png";

import MoreIcon from "../../assets/images/more.png";
import HeaderImage from "../../assets/images/TransactionsHeaderIcon.png";

import Transaction from "../../components/Transaction";
import BottomDivider from "../../components/BottomDivider";
import DatePicker from "../../components/DatePicker";

const Transactions = () => {
  const [date, setDate] = useState(new Date());

  const [transactions, setTransactions] = useState({
    date: [],
    page: 1,
  });
  const navigation = useNavigation();

  const utcDate = new Date(date);
  utcDate.setMinutes(utcDate.getMinutes() - date.getTimezoneOffset());
  const dateWithoutTimestamp = utcDate.toISOString().split("T")[0];

  useEffect(() => {
    async function fetchTransactions() {
      const response = await api
        .get(`/transactions?date=${dateWithoutTimestamp}`)
        .then(res => res)
        .catch(err => ({ err: true, message: err.message }));

      if (response.err) {
        setTransactions({
          data: [],
          page: 1,
        });
        return;
      }

      setTransactions({
        data: [...response.data.transactions],
        page: 2,
      });
    }

    fetchTransactions();
  }, [date]);

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  function renderItem({ item }) {
    return (
      <Transaction
        amount={item.amount}
        date={item.created_at}
        walletName={item.wallet_name}
      />
    );
  }

  function navigatePage(pageName) {
    return navigation.navigate(pageName);
  }
  const fetchProjects = useCallback(async () => {
    const { data, page } = transactions;

    const response = await api
      .get(`/transactions?date=${dateWithoutTimestamp}&page=${page}`)
      .then(res => res)
      .catch(err => ({ err: true, message: err.message }));

    if (response.err) {
      return;
    }

    setTransactions({
      data: [...data, ...response.data.transactions],
      page: page + 1,
    });
  }, [transactions]);

  return (
    <Container>
      <ContentArea>
        <ContainerFlatList
          data={transactions.data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          onEndReached={fetchProjects}
          onEndReachedThreshold={0.1}
          ListHeaderComponent={() => (
            <>
              <Header>
                <IconArrowView
                  onPress={() => {
                    navigatePage("Overview");
                  }}
                >
                  <IconArrow source={LeftArrow} />
                </IconArrowView>
                <MoreOptions source={MoreIcon} />
                <HeaderIconBottom source={HeaderImage} />
              </Header>
              <Content>
                <FilterContent>
                  <DatePicker
                    changeValue={(_, selectedValue) =>
                      onChange(_, selectedValue)
                    }
                    date={date}
                  />
                </FilterContent>

                <PageName>Transações</PageName>
              </Content>
            </>
          )}
        />
      </ContentArea>
    </Container>
  );
};

export default Transactions;

/*
import React, { useState, useRef, useCallback, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

import {
  Container,
  Content,
  Header,
  IconArrow,
  MoreOptions,
  HeaderIconBottom,
  FilterContent,
  IconArrowView,
  PageName,
  ContainerFlatList,
  ContentArea,
} from "./styles/";

import LeftArrow from "../../assets/images/left-arrow.png";
import MoreIcon from "../../assets/images/more.png";
import HeaderImage from "../../assets/images/TransactionsHeaderIcon.png";

import DatePicker from "../../components/DatePicker";
import Transaction from "../../components/Transaction";
import BottomDivider from "../../components/BottomDivider";

const HeaderComponent = React.forwardRef((props, ref) => {
  const navigation = useNavigation();

  function navigatePage(pageName) {
    return navigation.navigate(pageName);
  }

  return (
    <>
      <Header>
        <IconArrowView
          onPress={() => {
            navigatePage("Overview");
          }}
        >
          <IconArrow source={LeftArrow} />
        </IconArrowView>
        <MoreOptions source={MoreIcon} />
        <HeaderIconBottom source={HeaderImage} />
      </Header>
      <Content>
        <FilterContent  >
          <DatePickerComponent  />
        </FilterContent>

        <PageName>Transações</PageName>
      </Content>
    </>
  );
});

const Transactions = React.forwardRef(() => {
  const [transactions, setTransactions] = useState({
    data: [],
    page: 1,
  });

  

  useEffect(() => {
    fetchProjects();
  }, []);

  

  

  const fetchProjects = useCallback(async () => {
   

    await api
      .get(`/transactions/?page=${transactions.page}`)
      .then(res => {
        const { page, data } = transactions;

        setTransactions({
          data: data.concat(res.data.transactions),
          page: page + 1,
        });
      })
      .catch(err => {
        return;
      });
  }, []);

  

  return (
    <Container>
      <ContentArea>
        <ContainerFlatList
          data={transactions.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
         
          ListHeaderComponent={() => (
            <HeaderComponent/>
          )}
        />
      </ContentArea>
      <BottomDivider />
    </Container>
  );
});

export default Transactions;
*/
