import { Image, Modal, Platform, StyleSheet } from 'react-native';

import { Text } from '../components/Text';

import { BackToLoginButton, Overlay, ModalBody, Header, Form, Label, Input } from './styles';
import { Button } from '../components/Button';
import { useState } from 'react';
import { TermsModal } from '../TermsModal';

const styles = StyleSheet.create({
  Logo: {
    height: 83,
    width: 83,
  },
  Click: {
    height: 112,
    width: 112,
  },
});

interface CreateAccountModalProps {
  visible: boolean;
  onClose: () => void;
}

export function CreateAccountModal({ visible, onClose }: CreateAccountModalProps) {
  const [isTermsModalVisible, setIsTermsModalVisible] = useState(false);

  const [createAccount, setCreateAccount] = useState('');
  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >

        <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>

          <ModalBody>
            <BackToLoginButton onPress={onClose}>
              <Text size={16} color="#e1b12c">voltar</Text>
            </BackToLoginButton>

            <Header>
              <Image
                style={styles.Logo}
                source={require('../../uploads/Vector-blue.png')}
              />

              <Image
                style={styles.Click}
                source={require('../../uploads/reserva-click.png')}
              />
            </Header>

            <Form>
              <Label>
                <Text color="#666">Nome</Text>
              </Label>

              <Input
                placeholder="nome"
                placeholderTextColor="#666"
                onChangeText={setCreateAccount}
              />

              <Label>
                <Text color="#666">E-mail</Text>
              </Label>

              <Input
                placeholder="e-mail"
                placeholderTextColor="#666"
                keyboardType="email-address"
                onChangeText={setCreateAccount}
              />

              <Label>
                <Text color="#666">Telefone</Text>
              </Label>

              <Input
                placeholder="telefone"
                placeholderTextColor="#666"
                keyboardType="phone-pad"
                onChangeText={setCreateAccount}
              />

              <Label>
                <Text color="#666">Criar senha</Text>
              </Label>

              <Input
                placeholder="senha"
                placeholderTextColor="#666"
                onChangeText={setCreateAccount}
              />

              <Label>
                <Text color="#666">Confirmar senha</Text>
              </Label>

              <Input
                placeholder="senha"
                placeholderTextColor="#666"
                onChangeText={setCreateAccount}
              />

              <Button onPress={() => setIsTermsModalVisible(true)} disabled={createAccount.length === 0}>
                Criar conta
              </Button>
            </Form>
          </ModalBody>
        </Overlay>
      </Modal>

      <TermsModal
        visible={isTermsModalVisible}
        onClose={() => setIsTermsModalVisible(false)}
      />
    </>
  );
}
