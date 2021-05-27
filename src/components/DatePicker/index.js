import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Container, Months, Days, Years, Month, Day, Year } from "./styles";

import DownArrow from "../../assets/images/down-arrow.png";

import DateTimePicker from "@react-native-community/datetimepicker";
const DatePickerComponent = (props, ref) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  function getDate(ref) {
    return date;
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  function showMode() {
    setShow(true);
    console.log(show);
  }

  useImperativeHandle(ref, () => {
    return {
      getDate,
      showMode,
    };
  });
  return (
    <Container>
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: "#FFF",
          marginRight: 10,
        }}
      />

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <Image source={DownArrow} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    flex: 1,
    color: "white",
    backgroundColor: "#8900f2",
  },
});
export default forwardRef(DatePickerComponent);
