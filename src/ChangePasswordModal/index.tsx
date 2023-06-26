import { Modal } from 'react-native';
import { Text } from '../components/Text';
import { Form, Input, Label, ModalBody, Overlay, BackToLoginButton } from './styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { ChangePasswordCodeModal } from '../ChangePasswordCodeModal';
import { useState } from 'react';

interface ChangePasswordProps {
  visible: boolean;
  onClose: () => void;
}

export function ChangePasswordModal({ visible, onClose }: ChangePasswordProps) {
  const [isChangePasswordCodeModalVisible, setIsChangePasswordCodeModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Overlay>
          <ModalBody>
            <BackToLoginButton onPress={onClose}>
              <Text color="#e1b12c">Voltar</Text>
            </BackToLoginButton>

            <Header />

            <Form>
              <Label>
                <Text size={16} weight="600" color="#666">Insira o seu e-mail para o envio</Text>
                <Text size={16} weight="600" color="#666">do código</Text>
              </Label>
            </Form>

            <Input
              placeholder="Digite o seu e-mail"
              placeholderTextColor="#666"
              keyboardType="email-address"
            />

            <Button onPress={() => setIsChangePasswordCodeModalVisible(true)}>
              Enviar
            </Button>
          </ModalBody>
        </Overlay>
      </Modal>

      <ChangePasswordCodeModal
        visible={isChangePasswordCodeModalVisible}
        onClose={() => setIsChangePasswordCodeModalVisible(false)}
      />

    </>
  );
}
