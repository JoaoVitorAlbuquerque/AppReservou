import { Modal } from 'react-native';
import { Text } from '../components/Text';
import { CancelButton, Form, Header, ModalBody, OkButton, Overlay } from './styles';

interface PermissionGpsDenyModalProps {
  visible: boolean;
  onClose: () => void;
}

export function PermissionGpsDenyModal({ visible }: PermissionGpsDenyModalProps) {

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
              <Text size={18} color="#666">
                Nos permita ter acesso a sua localização.
              </Text>

              <Text size={16} color="#666">
                Precisamos da sua localização para fazer a sua reservas econtrar pontos de estabelecimento.
              </Text>
            </Header>

            <Form>
              <OkButton onPress={() => alert('OK')}>
                OK
              </OkButton>

              <CancelButton onPress={() => alert('OK')}>
                CANCELAR
              </CancelButton>
            </Form>
          </ModalBody>
        </Overlay>
      </Modal>
    </>
  );
}
