import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
`; // Talvez tirar a Overlay

export const ModalBody = styled.View`
  margin-top: 24px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View``;

export const MainText = styled.View`
  background: #EDEDED;
  height: 478px;
  width: 328px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const FooterMain = styled.View`
  flex-direction: row;
  gap: 15px;
  margin-top: 68px;
`;

export const Check = styled.TouchableOpacity`
  width: 21px;
  height: 21px;
  border: 2px solid #666666;
  border-radius: 4px;
  justify-content: center;
`;

export const Footer = styled.View`
  margin-top: 30px;
  width: 328px;
`;

export const BackToRegisterButton = styled.TouchableOpacity`
  //margin: 24px 0 16px 0;
  margin-left: 16px;
  margin-bottom: 16px;
`;
