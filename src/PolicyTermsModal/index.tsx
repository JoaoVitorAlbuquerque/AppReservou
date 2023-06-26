import { Modal } from 'react-native';
import { Container } from './styles';
import { MenuHeader } from '../components/MenuHeader';

interface PolicyTermsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function PolicyTermsModal({ visible, onClose }: PolicyTermsModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Container>
        <MenuHeader onClose={onClose}>
          Termos de uso
        </MenuHeader>
      </Container>
    </Modal>
  );
}
