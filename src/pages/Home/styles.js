import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(_ => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background: #fcfcfc;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Logo = styled.Image`
  width: 34px;
  height: 44px;
  margin: 48px auto 64px;
`;

export const Hero = styled.Image`
  width: 262px;
  height: 262px;
  margin: 0 auto;
`;

export const GroupingView = styled.View`
  padding: 16px;
  margin-bottom: 48px;
`;

export const Heading = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #8900f2;
  margin-top: 36px;
  margin-bottom: 32px;
`;
