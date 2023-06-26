import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }) => disabled ? '#999' : '#E1B12C'};
  border-radius: 8px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
`;
