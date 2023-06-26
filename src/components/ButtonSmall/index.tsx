import { Text } from '../Text';
import { Container, ModalBody } from './styles';

interface ButtonSmallProps {
  children: string;
  onPress: () => void;
}

export function ButtonSmall({children, onPress}: ButtonSmallProps) {
  return (
    <Container>
      <ModalBody onPress={onPress}>
        <Text color="#f8f8f8" size={10}>{children}</Text>
      </ModalBody>
    </Container>
  );
}
