import styled from "styled-components/native";

export const Container = styled.View`
  position: relative;
`;

export const HalvedBottomBorder = styled.View`
  width: ${props => (props.shown ? `${props.width}px` : 0)};
  height: 2px;
  background-color: #8900f2;
  position: absolute;
  bottom: 0%;
  left: ${props => (props.position === "center" ? "50%" : "0%")};
  margin-left: ${props =>
    props.position === "center" ? `-${props.width / 2}px` : "16px"};
  margin-top: 3px;
`;
