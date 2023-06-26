import { Modal } from 'react-native';
import { Text } from '../components/Text';
import { DenyButton, Form, Header, ModalBody, OnePermissionButton, Overlay, PermissionButton } from './styles';
import { PermissionGpsDenyModal } from '../PermissionGpsDenyModal';
import { useState } from 'react';

interface PermissionGpsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function PermissionGpsModal({ visible, onClose }: PermissionGpsModalProps) {
  const [isPermissionGpsDenyModal, setIsPermissionGpsDenyModal] = useState(false);

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
              <Text size={16} color="#666">
                Permitir que o app Reservou acesse a localização deste dispositivo?
              </Text>
            </Header>

            <Form>
              <PermissionButton onPress={onClose}>
                DURANTE O USO DO APP
              </PermissionButton>

              <OnePermissionButton onPress={onClose}>
                APENAS ESTA VEZ
              </OnePermissionButton>

              <DenyButton onPress={() => setIsPermissionGpsDenyModal(true)}>
                NEGAR
              </DenyButton>
            </Form>
          </ModalBody>
        </Overlay>
      </Modal>

      <PermissionGpsDenyModal
        visible={isPermissionGpsDenyModal}
        onClose={() => setIsPermissionGpsDenyModal(false)}
      />
    </>
  );
}
