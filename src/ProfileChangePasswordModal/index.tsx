import { Modal, Platform } from 'react-native';
import { Container, Footer, FormContainer, ModalBody } from './styles';
import { MenuHeader } from '../components/MenuHeader';
import { FormDatas } from '../components/FormDatas';
import { Button } from '../components/Button';

interface ProfileChangePasswordModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ProfileChangePasswordModal({ visible, onClose }: ProfileChangePasswordModalProps) {

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Container behavior={Platform.OS === 'android' ? 'height' : 'padding'}>

          <ModalBody>
            <MenuHeader onClose={onClose}>
              Alterar senha
            </MenuHeader>

            <FormContainer>
              <FormDatas
                childrenP='senha atual'
                childrenK='phone-pad'
              >
                Senha atual
              </FormDatas>

              <FormDatas
                childrenP='nova senha'
                childrenK='phone-pad'
              >
                Nova senha
              </FormDatas>

              <FormDatas
                childrenP='confirmar senha'
                childrenK='phone-pad'
              >
                Confirmar senha
              </FormDatas>
            </FormContainer>

            <Footer>
              <Button onPress={() => alert('Senha alterada')}>
                Alterar
              </Button>
            </Footer>
          </ModalBody>

        </Container>
      </Modal>


    </>
  );
}
