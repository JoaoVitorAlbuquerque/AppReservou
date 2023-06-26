import { Modal } from 'react-native';
import { Container, ModalBody } from './styles';
import { InfoReservation } from '../components/InfoReservation';
import { MenuHeader } from '../components/MenuHeader';
import { InfoReservation2 } from '../components/InfoReservation2';
import { ReservationHomeModal } from '../ReservationHomeModal';
import { useState } from 'react';

interface ResultsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ResultsModal({ visible, onClose }: ResultsModalProps) {
  const [isReservationHomeModalVisible, setIsReservationHomeModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Container>

          <ModalBody>
            <MenuHeader onClose={onClose}>
              Resultados
            </MenuHeader>

            <InfoReservation />

            <InfoReservation2 />

          </ModalBody>

        </Container>
      </Modal>

      <ReservationHomeModal
        visible={isReservationHomeModalVisible}
        onClose={() => setIsReservationHomeModalVisible(false)}
      />
    </>
  );
}
