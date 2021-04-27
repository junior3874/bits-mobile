import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(_ => ({
  showsVerticalScrollIndicator: false,
}))`
  background-color: #fcfcfc;
  flex: 1;
`;

export const Content = styled.View`
  padding: 32px;
  padding-top: 24px;
`;

export const Heading = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #8900f2;
`;

export const Paragraph = styled.Text`
  font-size: 16px;
  color: #8900f2;
  margin-top: 14px;
  margin-bottom: 28px;
`;

export const ForgotPasswordText = styled.Text`
  color: #333;
  align-self: flex-end;
  margin-top: 10px;
  margin-bottom: 50px;
`;
