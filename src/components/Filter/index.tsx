import { Container, Line1, Line2 } from './styles';

interface FilterProps {
  onPress: () => void;
}

export function Filter({ onPress }: FilterProps) {
  return (
    <Container onPress={onPress}>
      <Line1></Line1>
      <Line2></Line2>
    </Container>
  );
}
