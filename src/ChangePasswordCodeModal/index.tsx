import { Modal } from 'react-native';
import { Text } from '../components/Text';
import { Form, Input, Label, ModalBody, Overlay, BackToChangePasswordButton } from './styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { LoginModal } from '../LoginModal';
import { useState } from 'react';

interface ChangePasswordCodeModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ChangePasswordCodeModal({ visible, onClose }: ChangePasswordCodeModalProps) {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Overlay>
          <ModalBody>
            <BackToChangePasswordButton onPress={onClose}>
              <Text color="#e1b12c">Voltar</Text>
            </BackToChangePasswordButton>

            <Header />

            <Form>
              <Label>
                <Text size={16} weight="600" color="#666">Insira o código enviado para:</Text>
                <Text size={16} color="#666">Reservou@gmail.com</Text>
              </Label>
            </Form>

            <Input
              placeholder="Digite o código"
              placeholderTextColor="#666"
            />

            <Button onPress={() => setIsLoginVisible(true)}>
              Enviar
            </Button>
          </ModalBody>
        </Overlay>
      </Modal>

      <LoginModal
        visible={isLoginVisible}
        onClose={() => setIsLoginVisible(false)}
      />
    </>
  );
}
