import { Modal, Platform } from 'react-native';
import { Container, Footer, FormContainer, ModalBody } from './styles';
import { MenuHeader } from '../components/MenuHeader';
import { Button } from '../components/Button';
import { FormDatas } from '../components/FormDatas';

interface MyDataModalProps {
  visible: boolean;
  onClose: () => void;
}

export function MyDataModal({ visible, onClose }: MyDataModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Container behavior={Platform.OS === 'android' ? 'height' : 'padding'}>

        <ModalBody>
          <MenuHeader onClose={onClose}>
              Dados
          </MenuHeader>

          <FormContainer>
            <FormDatas
              childrenP='Nome completo'
              childrenK=''
            >
                Nome Completo
            </FormDatas>

            <FormDatas
              childrenP='email@email.com'
              childrenK='email-address'
            >
                E-mail
            </FormDatas>

            <FormDatas
              childrenP='+55 (65) 9999-9999'
              childrenK='phone-pad'
            >
                Celular
            </FormDatas>
          </FormContainer>

        </ModalBody>

        <Footer>
          <Button onPress={()=> alert('Confirmou')}>
              Confirmar
          </Button>
        </Footer>


      </Container>
    </Modal>
  );
}
