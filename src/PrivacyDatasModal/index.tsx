import { Modal } from 'react-native';
import { Text } from '../components/Text';
import { Container, ModalBody, TextContainer } from './styles';
import { MenuHeader } from '../components/MenuHeader';

interface PrivacyDatasModalProps {
  visible: boolean;
  onClose: () => void;
}

export function PrivacyDatasModal({ visible, onClose }: PrivacyDatasModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Container>

        <ModalBody>
          <MenuHeader onClose={onClose}>
            Privacidade de Dados
          </MenuHeader>

          <TextContainer>
            <Text>Seus dados estão protegidos e não serão compartilhados</Text>
          </TextContainer>
        </ModalBody>

      </Container>
    </Modal>
  );
}
