import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  width: 70%;
`;

export const ModalBody = styled.View`
  background: #f8f8f8;
  flex: 1;
`;

export const Header = styled.View`
  background: #e1b12c;
  height: 64px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Photos = styled.View`
  background: #666;
  width: 42px;
  height: 42px;
  border-radius: 21px;
`;

export const BarsContainer = styled.View`
  align-items: flex-end;
  margin-top: 11px;
  margin-right: 12px;
`;

export const ElementsContainer = styled.View`
  flex: 1;
  margin-top: 11px;
`;

export const HomeBack = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 16px;
  height: 38px;
  align-items: center;
  justify-content: center;
  margin-top: 41px;
  border: 1px solid #f8f8f8;
  border-bottom-color: #666;
`;

export const Profile = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 16px;
  height: 38px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border: 1px solid #f8f8f8;
  border-bottom-color: #666;
`;

export const Reservations = styled.TouchableOpacity`
  flex-direction: row;
  height: 38px;
  margin-left: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border: 1px solid #f8f8f8;
  border-bottom-color: #666;
`;
