import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '100px')};
  background-color: transparent;
`;
