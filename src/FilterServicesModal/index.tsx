import { Modal } from 'react-native';
import { Container, Footer, ModalBody, ServicesContainer } from './styles';
import { HeaderFilter } from '../components/HeaderFilter';
import { Text } from '../components/Text';
import { LocalServices } from '../components/LocalServices';
import { HomeService } from '../components/HomeService/inde';
import { Button } from '../components/Button';
import { ResultsModal } from '../ResultsModal';
import { useState } from 'react';
import { FilterRestaurantModal } from '../FilterRestaurantModal';

interface FilterServicesModalProps {
  visible: boolean;
  onClose: () => void;
}

export function FilterServicesModal({ visible, onClose }: FilterServicesModalProps) {
  const [isResultsModalVisible, setIsResultsModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Container>

          <ModalBody>
            <HeaderFilter onClose={onClose}>Filtros Serviços</HeaderFilter>

            <ServicesContainer>
              <Text size={14} color="#222d5b" weight="600">Tipo de serviço com local atendimento</Text>

              <LocalServices />

              <Text size={14} color="#222d5b" weight="600">Tipo de serviço Profissionais a domicílio</Text>

              <HomeService />
            </ServicesContainer>

            <Footer>
              <Button onPress={() => setIsResultsModalVisible(true)}>
                Aplicar
              </Button>
            </Footer>
          </ModalBody>

        </Container>
      </Modal>

      <ResultsModal
        visible={isResultsModalVisible}
        onClose={() => setIsResultsModalVisible(false)}
      />
    </>
  );
}
