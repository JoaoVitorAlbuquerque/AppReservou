import { Image, Modal, StyleSheet } from 'react-native';
import { Text } from '../components/Text';
import { BarsContainer, ElementsContainer, Header, HomeBack, ModalBody, Overlay, Photos, Profile, Reservations } from './styles';
import { Bars } from '../components/Bars';
import { ReservationModal } from '../ReservationModal';
import { useState } from 'react';
import { ProfileInfoModal } from '../ProfileInfoModal';

const styles = StyleSheet.create({
  Casa: {
    height: 22,
    width: 22,
  },
  Perfil: {
    height: 16,
    width: 16,
  },
  Check: {
    height: 16,
    width: 16,
  },
});

interface MenuModalProps {
  visible: boolean;
  onClose: () => void;
}

export function MenuModal({ visible, onClose }: MenuModalProps) {
  const [isReservationModalVisible, setIsReservationModalVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);

  return (
    <>
      <Modal
        transparent
        visible={visible}
        animationType='fade'
      >
        <Overlay>
          <ModalBody>
            <Header>
              <Photos></Photos>

              <Text size={16} color="#f8f8f8">Nome de Usuário</Text>
            </Header>

            <BarsContainer>
              <Bars
                onPress={onClose}
              />
            </BarsContainer>

            <ElementsContainer>
              <HomeBack onPress={onClose}>
                <Image
                  style={styles.Casa}
                  source={require('../../uploads/Casa.png')}
                />

                <Text style={{ 'margin-left': 11 }} size={15} color="#666">Inicio</Text>
                <Text style={{ 'margin-left': 145 }} color="#666" size={20}>{'>'}</Text>
              </HomeBack>

              <Profile onPress={() => setIsProfileModalVisible(true)}>
                <Image
                  style={styles.Perfil}
                  source={require('../../uploads/Perfil.png')}
                />

                <Text style={{ 'margin-left': 11 }} size={15} color="#666">Perfil</Text>
                <Text style={{ 'margin-left': 145 }} color="#666" size={20}>{'>'}</Text>
              </Profile>

              <Reservations onPress={() => setIsReservationModalVisible(true)}>
                <Image
                  style={styles.Check}
                  source={require('../../uploads/Check.png')}
                />

                <Text style={{ 'margin-left': 11 }} size={15} color="#666">Suas Reservas</Text>
                <Text style={{ 'margin-left': 80 }} color="#666" size={20}>{'>'}</Text>
              </Reservations>

            </ElementsContainer>

          </ModalBody>
        </Overlay>
      </Modal>

      <ReservationModal
        visible={isReservationModalVisible}
        onClose={() =>setIsReservationModalVisible(false)}
      />

      <ProfileInfoModal
        visible={isProfileModalVisible}
        onClose={() => setIsProfileModalVisible(false)}
      />
    </>
  );
}
