import { IconBack } from '../IconeVoltar';
import { Text } from '../Text';
import { Container, ModalBody } from './styles';

interface MenuHeaderProps {
  children: string;
  onClose: () => void;
}

export function MenuHeader({ children, onClose }: MenuHeaderProps) {
  return (
    <Container>
      <IconBack onPress={onClose} />

      <ModalBody>
        <Text size={20} color="#f8f8f8">{children}</Text>
      </ModalBody>

    </Container>
  );
}
