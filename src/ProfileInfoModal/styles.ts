import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ModalBody = styled.View``;

export const Header = styled.View`
  background: #e1b12c;
  height: 240px;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const ProfilePhoto = styled.View`
  background: #666;
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Camera = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const IconBackContainer = styled.View`
  position: absolute;
  left: 0;
  top: 40px;
`;

export const ElementsContainer = styled.View`
  flex: 1;
  margin-top: 11px;
`;

export const MyData = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 16px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  margin-top: 41px;
  border: 1px solid #f8f8f8;
  border-bottom-color: #666;
  padding-right: 16px;
`;

export const ChangePassword = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 16px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  border: 1px solid #f8f8f8;
  border-bottom-color: #666;
  padding-right: 16px;
`;

export const Help = styled.TouchableOpacity`
  flex-direction: row;
  height: 56px;
  margin-left: 16px;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  border: 1px solid #f8f8f8;
  border-bottom-color: #666;
  padding-right: 16px;
`;
