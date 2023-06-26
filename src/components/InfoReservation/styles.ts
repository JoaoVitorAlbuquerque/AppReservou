import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ededed;
  flex: 1;
`;

export const Overlay = styled.View`
  padding: 16px;
`;

export const ModalBody = styled.View`
  background: #d9d9d9;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PhotoContainer = styled.View`
  width: 34%;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

export const InfoContainer = styled.View`
  width: 66%;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Photo = styled.View`
  background: gray;
  width: 54px;
  height: 54px;
  border-radius: 27px;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  gap: 3px;
`;

export const SocialMedia = styled.View`
  flex-direction: row;
  gap: 6px;
`;
