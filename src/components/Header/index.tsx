import { Container } from './styles';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Logo: {
    height: 83,
    width: 83,
  },
  Click: {
    //height: 112,
    //width: 112,
  },
});

export function Header() {
  return (
    <Container>
      <Image
        style={styles.Logo}
        source={require('../../../uploads/Vector-blue.png')}
      />

      <Image
        style={styles.Click}
        source={require('../../../uploads/reserva-click.png')}
      />
    </Container>
  );
}
