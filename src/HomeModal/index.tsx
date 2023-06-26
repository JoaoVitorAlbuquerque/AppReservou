import { Image, Modal, StyleSheet } from 'react-native';
import { Text } from '../components/Text';
import { Container, Header, BarrasContainer, FiltroContainer, LogoContainer, Body, TextContainer, Map, ButtonContainer, CategoriesContainer, Footer, ExploreContainer, ServicesContainer, Line} from './styles';
import { ButtonMap } from '../components/ButtonMap';
import { Products } from '../components/Products';
import { Categories } from '../components/Categories';
import { PermissionGpsModal } from '../PermissionGpsModal';
import { useState } from 'react';
import { MenuModal } from '../MenuModal';
import { Bars } from '../components/Bars';
import { Filter } from '../components/Filter';
import { FilterServicesModal } from '../FilterServicesModal';

const styles = StyleSheet.create({
  Logo: {
    height: 38,
    width: 38,
  },
  Click: {
    //height: 52,
    //width: 52,
  },
  Mapa: {
    height: 145,
  },
});

interface HomeModalProps {
  visible: boolean;
}

export function HomeModal({ visible }: HomeModalProps) {
  const [isPermissionGpsModalVisible, setIsPermissionGpsModalVisible] = useState(false);
  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);
  const [isFilterServicesModalVisible, setIsFilterServicesModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >

        <Container>

          <Header>
            <BarrasContainer>
              <Bars
                onPress={() => setIsMenuModalVisible(true)}
              /> {/*Botão*/}
            </BarrasContainer>

            <LogoContainer>
              <Image
                style={styles.Logo}
                source={require('../../uploads/Vector.png')}
              />

              <Image
                style={styles.Click}
                source={require('../../uploads/reserva-click.png')}
              />
            </LogoContainer>

            <FiltroContainer>
              <Filter onPress={() => setIsFilterServicesModalVisible(true)}></Filter>
            </FiltroContainer>
          </Header>

          <Body>

            <TextContainer>
              <Text weight="600" color="#222d5b">Localização</Text>
            </TextContainer>

            <Map>
              <Image
                style={styles.Mapa}
                source={require('../../uploads/mapa.png')}
              />
            </Map>

            <ButtonContainer>
              <ButtonMap onPress={() => setIsPermissionGpsModalVisible(true)}>
                Ativar o GPS
              </ButtonMap>
            </ButtonContainer>

          </Body>

        </Container>

        <CategoriesContainer>
          <Line />

          <ServicesContainer>
            <Text size={15} weight="600" color="#222D5B" style={{ 'margin-left': 16 }}>
              Serviços e Reservas Próximos
            </Text>

            <Products />
          </ServicesContainer>

          <Line />

          <ExploreContainer>
            <Text size={15} weight="600" color="#222D5B" style={{ 'margin-left': 16 }}>
              Explore
            </Text>

            <Categories />
          </ExploreContainer>
        </CategoriesContainer>

        <Footer></Footer>

      </Modal>

      <PermissionGpsModal
        visible={isPermissionGpsModalVisible}
        onClose={() => setIsPermissionGpsModalVisible(false)}
      />

      <MenuModal
        visible={isMenuModalVisible}
        onClose={() => setIsMenuModalVisible(false)}
      />

      <FilterServicesModal
        visible={isFilterServicesModalVisible}
        onClose={() => setIsFilterServicesModalVisible(false)}
      />
    </>
  );
}
