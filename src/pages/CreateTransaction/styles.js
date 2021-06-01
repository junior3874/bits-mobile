import styled from "styled-components";

export const Container = styled.ScrollView.attrs(_ => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: #fcfcfc;
`;

export const WalletPickerLabel = styled.Text`
  margin-top: 32px;
  font-size: 18px;
  color: #666;
`;

export const ContentPadding = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 24px;
`;
