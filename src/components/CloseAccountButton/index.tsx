import { Text } from '../Text';
import { Container, ModalBody } from './styles';

interface CloseAccountButtonProps {
  children: string;
  onPress: () => void;
}

export function CloseAccountButton({children, onPress}: CloseAccountButtonProps) {
  return (
    <Container>
      <ModalBody onPress={onPress}>
        <Text>{children}</Text>
      </ModalBody>
    </Container>
  );
}
