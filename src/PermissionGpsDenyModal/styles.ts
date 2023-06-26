import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #f3f3f3;
  border-radius: 18px;
  padding: 24px;
`;

export const Header = styled.View`
  gap: 17px;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 31px;
  gap: 19px;
`;

export const OkButton = styled.TouchableOpacity`
  size: 14px;
  color: #e1b12c;
`;

export const CancelButton = styled.TouchableOpacity`
  size: 14px;
  color: #666;
`;
