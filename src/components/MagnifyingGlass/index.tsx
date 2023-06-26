import { Image, StyleSheet } from 'react-native';
import { Container } from './styles';

const styles = StyleSheet.create({
  Lupa: {
    height: 19,
    width: 19,
  },
});

export function MagnifyingGlass() {
  return (
    <Container>
      <Image
        style={styles.Lupa}
        source={require('../../../uploads/Lupa.png')}
      />
    </Container>
  );
}
