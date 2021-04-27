import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: #ff7e67;
  padding: 20px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftIcon = styled.View`
  background-color: white;
  width: 28px;
  height: 30px;
  width: 10%;
`;

export const ConfirmationText = styled.Text`
  font-size: 18px;
  width: 85%;
  color: #fff;
`;
