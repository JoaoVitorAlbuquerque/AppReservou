import { Modal } from 'react-native';
import { Text } from '../components/Text';
import { Form, Input, Label, ModalBody, Overlay, BackToChangePasswordCodeCodeButton } from './styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { useState } from 'react';
import { HomeModal } from '../HomeModal';

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
}

export function LoginModal({ visible, onClose }: LoginModalProps) {
  const [isHomeModalVisible, setIsHomeModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Overlay>

          <ModalBody>
            <BackToChangePasswordCodeCodeButton onPress={onClose}>
              <Text color="#e1b12c">Voltar</Text>
            </BackToChangePasswordCodeCodeButton>

            <Header />

            <Form>
              <Label>
                <Text color="#666" weight="600">Preencha os campos abaixo para</Text>
                <Text color="#666" weight="600">alterar a sua senha</Text>
              </Label>

              <Input
                placeholder="Digite a sua senha"
                placeholderTextColor="#666"
              />

              <Input
                placeholder="Confirme a sua senha"
                placeholderTextColor="#666"
              />
            </Form>

            <Button onPress={() => setIsHomeModalVisible(true)}>
              Confirmar
            </Button>
          </ModalBody>

        </Overlay>
      </Modal>

      <HomeModal
        visible={isHomeModalVisible}
      />
    </>
  );
}
