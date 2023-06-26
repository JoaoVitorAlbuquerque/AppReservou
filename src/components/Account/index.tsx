import { useState } from 'react';
import { Text } from '../Text';
import { Form, Label, Input, ChangePassword, ChangePasswordContainer } from './styles';
import { ChangePasswordModal } from '../../ChangePasswordModal';

export function Account() {
  const [isChangePasswordModalVisible, setIsChangePasswordModalVisible] = useState(false);

  return (
    <>
      <Form>
        <Label>
          <Text>E-mail</Text>
        </Label>

        <Input
          placeholder="e-mail"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />

        <Label>
          <Text>Senha</Text>
        </Label>

        <Input
          placeholder="senha"
          placeholderTextColor="#666"
        />
      </Form>

      <ChangePasswordContainer>
        <Text color="#231f20">Esqueceu sua senha ?</Text>

        <ChangePassword>
          <Text color="#e1b12c" onPress={() => setIsChangePasswordModalVisible(true)}>Clique aqui</Text>
        </ChangePassword>
      </ChangePasswordContainer>

      <ChangePasswordModal
        visible={isChangePasswordModalVisible}
        onClose={() => setIsChangePasswordModalVisible(false)}
      />
    </>
  );
}
