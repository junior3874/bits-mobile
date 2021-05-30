import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(_ => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background: #fcfcfc;
`;

export const Content = styled.View`
  padding: 16px;
  margin-top: 24px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #8900f2;
  padding: 16px;
  margin-top: 48px;
  border-radius: 8px;
`;

export const SubmitButtonText = styled.Text`
  text-align: center;
  color: #eee;
  font-size: 20px;
`;
