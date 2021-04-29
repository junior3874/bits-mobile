import React, { useState } from "react";
import { Defs, Stop, Circle, LinearGradient } from "react-native-svg";

import Tooltip from "./tooltip";

import {
  StyledStackedAreaChart,
  BottomLinearGradient,
  MonthList,
  Month,
  MonthBulletPoint,
  MonthName,
} from "./styles";

function Chart() {
  const mockData = [
    {
      date: "2019-01-01T20:36:24Z",
      september: 45,
      october: 70,
      id: 1,
      score: 3,
      sep: {
        value: 342,
      },
    },
    {
      date: "2019-01-05T02:31:40Z",
      september: 133,
      october: 200,
      id: 2,
      score: 9,
      sep: {
        value: 342,
      },
    },
    {
      date: "2019-01-06T06:03:09Z",
      september: 189,
      october: 240,
      id: 3,
      score: 10,
      sep: {
        value: 342,
      },
    },
    {
      date: "2019-01-22T06:23:01Z",
      september: 400,
      october: 826,
      id: 4,
      score: 7,
      sep: {
        value: 342,
      },
    },
    {
      date: "2019-01-26T22:37:01Z",
      september: 300,
      october: 443,
      id: 5,
      score: 6,
      sep: {
        value: 342,
      },
    },
    {
      date: "2019-01-30T16:20:19Z",
      september: 342,
      october: 444,
      id: 6,
      score: 10,
      sep: {
        value: 342,
      },
    },
  ];
  const [tooltipX, setTooltipX] = useState(null);
  const [tooltipY, setTooltipY] = useState(null);
  const [tooltipIndex, setTooltipIndex] = useState(null);
  const [tooltipValue, setTooltipValue] = useState(null);
  const [tooltipShown, setTooltipShown] = useState(false);
  const colors = [
    ["#ff00d4", "#fd85c9"],
    ["#9000ff", "#c06ffe"],
  ];
  const keys = ["september", "october"];
  const svgs = keys.map(item => ({ fill: `url(#gradient-${item})` }));

  const ChartPoints = ({ x, y }) =>
    mockData.map((item, index) =>
      keys.map((month, mIndex) => {
        let markerY = 0;
        if (month === keys[0]) {
          markerY = item[month];
        } else {
          markerY = item[month] + item[keys[mIndex - 1]];
        }

        return (
          <Circle
            key={`${index}-${mIndex}`}
            r={5}
            fill="white"
            cx={x(index)}
            cy={y(markerY)}
            onPress={() => {
              setTooltipX(index);
              setTooltipY(markerY);
              setTooltipIndex(index);
              setTooltipValue(item[month]);
              setTooltipShown(true);
            }}
          />
        );
      })
    );

  return (
    <>
      <StyledStackedAreaChart
        data={mockData}
        keys={keys}
        colors={colors}
        svgs={svgs}
      >
        <Defs>
          {colors.map((item, index) => (
            <LinearGradient
              id={`gradient-${keys[index]}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <Stop offset="0" stopColor={item[1]} stopOpacity="1" />
              <Stop offset="1" stopColor={item[0]} stopOpacity="1" />
            </LinearGradient>
          ))}
        </Defs>
        <ChartPoints />
        <Tooltip
          tooltipX={tooltipX}
          tooltipY={tooltipY}
          tooltipValue={tooltipValue}
          tooltipShown={tooltipShown}
          tooltipIndex={tooltipIndex}
          color="#003F5A"
          dataLength={mockData.length}
        />
      </StyledStackedAreaChart>
      <BottomLinearGradient colors={colors[0]} />
      <MonthList>
        {keys.map((item, index) => (
          <Month>
            <MonthBulletPoint colors={colors[index]} />
            <MonthName>{keys[index]}</MonthName>
          </Month>
        ))}
      </MonthList>
    </>
  );
}

export default Chart;
