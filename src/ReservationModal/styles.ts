import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ededed;
  flex: 1;
`;

export const ModalBody = styled.View`
  background: #d9d9d9;
  width: 328px;
  height: 129px;
  border-radius: 20px;
  margin-left: 16px;
  margin-top: 20px;
  flex-direction: row;
`;

export const PhotoContainer = styled.View`
  width: 34%;
  align-items: center;
  justify-content: center;
  gap: 14px;
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
