import { Modal } from 'react-native';
import { Container } from './styles';
import { MenuHeader } from '../components/MenuHeader';

interface PolicyPrivacyModalProps {
  visible: boolean;
  onClose: () => void;
}

export function PolicyPrivacyModal({ visible, onClose }: PolicyPrivacyModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Container>
        <MenuHeader onClose={onClose}>
          Política de privacidade
        </MenuHeader>
      </Container>
    </Modal>
  );
}
