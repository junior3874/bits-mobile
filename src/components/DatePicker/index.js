import React, { useMemo, useState } from "react";
import { View, Image } from "react-native";
import { format } from "date-fns";
import DateTimePicker from "@react-native-community/datetimepicker";

import { TodayDate, DateTimePickerContainer } from "./styles";

import DownArrow from "../../assets/images/down-arrow.png";

function DatePicker({ changeValue, date }) {
  const [show, setShow] = useState(false);

  const formattedDate = useMemo(() => format(date, "d'/'MM 'de' y"), [date]);

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    changeValue(_, currentDate);
  };
  return (
    <DateTimePickerContainer onPress={() => setShow(true)}>
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: "#FFF",
          marginRight: 10,
        }}
      />
      <TodayDate>{formattedDate}</TodayDate>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour
          display="default"
          onChange={onChange}
        />
      )}

      <Image source={DownArrow} />
    </DateTimePickerContainer>
  );
}

export default React.memo(DatePicker);
