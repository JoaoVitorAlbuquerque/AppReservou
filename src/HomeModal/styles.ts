import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  background: #e1b12c;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
`;

export const Header = styled.View`
  height: 62px;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const BarrasContainer = styled.View`
  width: 48px;
  height: 22px;
  margin-left: 16px;
  margin-top: 17px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 6px 3px 0;
`;

export const FiltroContainer = styled.View`
  margin-top: 15px;
  margin-right: 16px;
`;

export const Body = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const TextContainer = styled.View`
  margin-top: 18px;
  margin-left: 16px;
`;

export const Map = styled.View`
  background: gray;
  height: 145px;
  margin-top: 9px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 20px;
`;

export const CategoriesContainer = styled.View`
  flex: 1;
  margin-top: 22px;
`;

export const ServicesContainer = styled.View`
  flex: 1;
  margin-top: 14px;
`;

export const ExploreContainer = styled.View`
  flex: 1;
  margin-top: 9px;
`;

export const Footer = styled.View`
  background: #e1b12c;
  height: 32px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Line = styled.View`
  border: 1px solid #d9d9d9;
`;
