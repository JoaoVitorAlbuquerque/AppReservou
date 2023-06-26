import { useState } from 'react';
import { FilterRestaurantModal } from '../../FilterRestaurantModal';
import { Text } from '../Text';
import { Container, LineOne, LineThree, LineTwo, Service } from './styles';

export function LocalServices() {
  const [isFilterRestaurantModalVisible, setIsFilterRestaurantModalVisible] = useState(false);

  return (
    <>
      <Container>
        <LineOne>
          <Service>
            <Text size={11} color="#666">Estética</Text>
          </Service>
          <Service>
            <Text size={11} color="#666">Salão de beleza</Text>
          </Service>
          <Service>
            <Text size={11} color="#666">Massagem</Text>
          </Service>
        </LineOne>

        <LineTwo>
          <Service>
            <Text size={11} color="#666">Tatuagem</Text>
          </Service>
          <Service onPress={() => setIsFilterRestaurantModalVisible(true)} style={{ background: '#e1b12c' }}>
            <Text size={11} color="#f8f8f8">Restaurante</Text>
          </Service>
          <Service>
            <Text size={11} color="#666">Pizzaria</Text>
          </Service>
        </LineTwo>

        <LineThree>
          <Service>
            <Text size={11} color="#666">Esportes</Text>
          </Service>
          <Service>
            <Text size={11} color="#666">Barbearia</Text>
          </Service>
        </LineThree>

      </Container>

      <FilterRestaurantModal
        visible={isFilterRestaurantModalVisible}
        onClose={() => setIsFilterRestaurantModalVisible(false)}
      />
    </>
  );
}
