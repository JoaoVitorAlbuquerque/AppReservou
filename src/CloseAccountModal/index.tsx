import { Modal } from 'react-native';
import { Text } from '../components/Text';
import { Container, Footer, ModalBody, TextContainer } from './styles';
import { MenuHeader } from '../components/MenuHeader';
import { CloseAccountButton } from '../components/CloseAccountButton';

interface CloseAccountModal {
  visible: boolean;
  onClose: () => void;
}

export function CloseAccountModal({ visible, onClose }: CloseAccountModal) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Container>

        <ModalBody>
          <MenuHeader onClose={onClose}>
            Encerrar conta
          </MenuHeader>

          <TextContainer>
            <Text color="#666" size={16}>
              Deseja encerrar a sua conta? Este é um processo irreversível. Os seus dados serão excluídos permanentemente.
            </Text>
          </TextContainer>

          <Footer>
            <CloseAccountButton onPress={() => alert('Pressionou')}>
              Encerrar conta
            </CloseAccountButton>

            <CloseAccountButton onPress={() => alert('Pressionou')}>
              Cancelar
            </CloseAccountButton>
          </Footer>
        </ModalBody>

      </Container>
    </Modal>
  );
}
