import { Modal } from 'react-native';
import { Container, InfoContainer, ModalBody, Photo, PhotoContainer } from './styles';
import { MenuHeader } from '../components/MenuHeader';
import { Text } from '../components/Text';

interface ReservationModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ReservationModal({ visible, onClose }: ReservationModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Container>
        <MenuHeader onClose={onClose}>
          Reservas
        </MenuHeader>

        <ModalBody>
          <PhotoContainer>
            <Photo />

            <Text color="#27AE60" size={14} weight="600">Reservado</Text>
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
              Data:

              <Text size={14} color="#222D5B">22/09/2022</Text>
            </Text>

            <Text color="#222D5B" weight="600" size={14}>
              Horário:

              <Text size={14} color="#222D5B">18:00</Text>
            </Text>
          </InfoContainer>

        </ModalBody>
      </Container>
    </Modal>
  );
}
