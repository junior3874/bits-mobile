import styled from "styled-components/native";

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const FourItemsDisplay = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Half = styled.View`
  width: 45%;
  flex-direction: row;
`;

export const AddTransaction = styled.View`
  width: 100%;
  position: absolute;
  align-items: center;
  z-index: 3;
  bottom: 40px;
`;

export const AddTransactionTouchable = styled.TouchableOpacity`
  background-color: ${({ isMenuOpen }) => (isMenuOpen ? "#8900f2" : "#fff")};
  border-radius: 32px;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  elevation: 4;
`;

export const ChooseActionView = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -8px;
  z-index: 1;
`;

export const ChooseAction = styled.View`
  elevation: 6;
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 75px;
  border: 1px solid #e5e5e5;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChooseActionTouchable = styled.TouchableOpacity`
  flex: 1;
  align-items: center;

  margin-top: ${({ left, right }) => (left || right ? "6px" : "0")};
  border-top-right-radius: ${({ right }) => (right ? "75px" : "0")};
  border-top-left-radius: ${({ left }) => (left ? "75px" : "0")};
`;

export const ChooseActionIcon = styled.Image`
  width: 22px;
  height: 22px;
  margin-top: 36px;
`;
