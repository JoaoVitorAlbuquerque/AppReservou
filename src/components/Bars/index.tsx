import { Container, Line1, Line2, Line3 } from './styles';

interface BarsProps {
  onPress: () => void;
}

export function Bars({ onPress }: BarsProps) {
  return (
    <Container onPress={onPress}>
      <Line1></Line1>
      <Line2></Line2>
      <Line3></Line3>
    </Container>
  );
}
