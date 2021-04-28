import React from "react";
import { G, Rect, Text, Polygon, Path } from "react-native-svg";

import moment from "moment";

const Tooltip = ({
  // eslint-disable-next-line react/prop-types
  x,
  y,
  tooltipX,
  tooltipY,
  tooltipValue,
  tooltipShown,
  color,
  tooltipIndex,
  dataLength,
}) => {
  let xAxis = 4;
  if (dataLength > 4) {
    if (tooltipIndex < 2) {
      xAxis = 35;
    } else if (tooltipIndex > dataLength - 2) {
      xAxis = -20;
    } else {
      xAxis = 4;
    }
  }

  let tooltipValueFormatted = `R$ ${tooltipValue},26`;
  let rectWidth =
    tooltipValueFormatted.length < 10
      ? 72
      : tooltipValueFormatted.length * 8 - tooltipValueFormatted.length * 0.5;

  if (!tooltipShown) {
    return null;
  }

  return (
    <G x={x(tooltipX) - 40} y={y(tooltipY)}>
      <G y={-35} x={xAxis}>
        <Rect
          x={-2}
          y={0}
          ry={4}
          rx={4}
          fill="white"
          width={rectWidth}
          height={22}
        />
        <Text x={6} y={14} fill="#8900f2">
          {tooltipValueFormatted}
        </Text>
      </G>
    </G>
  );
};

export default Tooltip;
