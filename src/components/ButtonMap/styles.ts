import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }) => disabled ? '#999' : '#E1B12C'};
  align-items: center;
  justify-content: center;
  margin: 24px;
  width: 104px;
  height: 33px;
  border-radius: 10px;
`;
