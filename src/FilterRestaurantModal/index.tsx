import { Modal } from 'react-native';
import { Container, ModalBody } from './styles';
import { MenuHeader } from '../components/MenuHeader';
import { InfoReservation2 } from '../components/InfoReservation2';

interface FilterRestaurantModal {
  visible: boolean;
  onClose: () => void;
}

export function FilterRestaurantModal({ visible, onClose }: FilterRestaurantModal) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Container>
        <ModalBody>
          <MenuHeader onClose={onClose}>
            Restaurantes
          </MenuHeader>

          <InfoReservation2 />
        </ModalBody>
      </Container>
    </Modal>
  );
}
