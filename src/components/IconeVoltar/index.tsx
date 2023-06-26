import { Text } from '../Text';
import { Container } from './styles';

interface IconBackProps {
  onPress: () => void;
}

export function IconBack({ onPress }: IconBackProps) {
  return (
    <Container onPress={onPress}>
      <Text color="#f8f8f8" size={24}>{'<'}</Text>
    </Container>
  );
}
