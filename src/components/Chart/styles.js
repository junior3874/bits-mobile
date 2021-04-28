import styled from "styled-components/native";
import { StackedAreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { LinearGradient } from "expo-linear-gradient";

export const StyledStackedAreaChart = styled(StackedAreaChart).attrs(_ => ({
  contentInset: { top: 60 },
  curve: shape.curveNatural,
}))`
  height: 240px;
  background-color: #333;
  border-radius: 20px;
  padding-bottom: 16px;
  margin-top: 30px;
`;

export const BottomLinearGradient = styled(LinearGradient).attrs(_ => ({
  start: { x: 1, y: 1 },
  end: { x: 0, y: 0 },
}))`
  width: 100%;
  height: 16px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: -16px;
  elevation: 4;
`;

export const MonthList = styled.View`
  margin-top: 10px;
`;

export const Month = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

export const MonthBulletPoint = styled(LinearGradient).attrs(_ => ({
  start: { x: 1, y: 1 },
  end: { x: 0, y: 0 },
}))`
  width: 12px;
  height: 12px;
  margin-right: 12px;
  border-radius: 6px;
`;

export const MonthName = styled.Text`
  color: #333;
  font-size: 16px;
`;
