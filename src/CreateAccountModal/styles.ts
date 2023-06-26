import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  background: #fafafa; //rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: stretch;
  justify-content: center;
  height: 100%;
`;

export const ModalBody = styled.View`
  flex: 1;
  background: #fff; //#BFBDBD
`;

export const BackToLoginButton = styled.TouchableOpacity`
  position: absolute;
  //margin: 24px 0 16px 0;
  margin-top: 16px;
  margin-left: 16px;
`;

export const Header = styled.View`
  margin: 16px 112px;
  height: 112px;
`;

export const Form = styled.View``;

export const Label = styled.View`
  margin-left: 16px;
`;

export const Input = styled.TextInput`
  background: #fafafa;
  border: 1px solid #666666;
  border-radius: 8px;
  margin: 12px 16px;
  padding: 16px;
`;
