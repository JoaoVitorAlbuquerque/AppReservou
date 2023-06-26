import { useState } from 'react';
import { ButtonSmall } from '../ButtonSmall';
import { Text } from '../Text';
import { Container, ImageContainer, InfoContainer, ModalBody, Overlay, Photo, PhotoContainer, SocialMedia } from './styles';
import { ReservationHomeModal } from '../../ReservationHomeModal';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  SocialMedia: {
    height: 11,
    width: 11,
  },
  Stars: {
    height: 11,
    width: 11,
  },
});

export function InfoReservation() {
  const [isReservationHomeModalVisible, setIsReservationHomeModalVisible] = useState(false);

  return (
    <>
      <Container>
        <Overlay>
          <ModalBody>
            <PhotoContainer>
              <Photo />

              <Text color="#222d5b" size={12} weight="600">Avaliação</Text>
              <ImageContainer>
                <Image
                  style={styles.Stars}
                  source={require('../../../uploads/Estrela.png')}
                />
                <Image
                  style={styles.Stars}
                  source={require('../../../uploads/Estrela.png')}
                />
                <Image
                  style={styles.Stars}
                  source={require('../../../uploads/Estrela.png')}
                />
                <Image
                  style={styles.Stars}
                  source={require('../../../uploads/Estrela.png')}
                />
                <Image
                  style={styles.Stars}
                  source={require('../../../uploads/Estrela2.png')}
                />
              </ImageContainer>
            </PhotoContainer>

            <InfoContainer>
              <Text color="#222D5B" weight="600" size={14}>
              Nome:

                <Text size={14} color="#222D5B">Gustavo Ribeiro</Text>
              </Text>

              <Text color="#222D5B" weight="600" size={14}>
              Profissão:

                <Text size={14} color="#222D5B">Barbeiro</Text>
              </Text>

              <Text color="#222D5B" weight="600" size={14}>
              Contato:

                <Text size={14} color="#222D5B">(11) 9999-9999</Text>
              </Text>

              <Text color="#222D5B" weight="600" size={14}>
              Endereço:

                <Text size={14} color="#222D5B">rua, bairro, número</Text>
              </Text>

              <Text size={14}>
                <SocialMedia>
                  <Image
                    style={styles.SocialMedia}
                    source={require('../../../uploads/Whats.png')}
                  />
                  <Image
                    style={styles.SocialMedia}
                    source={require('../../../uploads/Face.png')}
                  />
                  <Image
                    style={styles.SocialMedia}
                    source={require('../../../uploads/Insta.png')}
                  />
                </SocialMedia>

                <ButtonSmall onPress={() => setIsReservationHomeModalVisible(true)}>
                  Reservar Agora
                </ButtonSmall>
              </Text>

            </InfoContainer>

          </ModalBody>
        </Overlay>
      </Container>

      <ReservationHomeModal
        visible={isReservationHomeModalVisible}
        onClose={() => setIsReservationHomeModalVisible(false)}
      />
    </>
  );
}
