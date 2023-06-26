import { IconBack } from '../IconeVoltar';
import { MagnifyingGlass } from '../MagnifyingGlass';
import { Text } from '../Text';
import { Container, ModalBody } from './styles';

interface HeaderFilterProps {
  children: string;
  onClose: () => void;
}

export function HeaderFilter({ children, onClose }: HeaderFilterProps) {
  return (
    <Container>
      <IconBack onPress={onClose} />

      <ModalBody>
        <Text size={20} color="#f8f8f8">{children}</Text>
      </ModalBody>

      <MagnifyingGlass />

    </Container>
  );
}
