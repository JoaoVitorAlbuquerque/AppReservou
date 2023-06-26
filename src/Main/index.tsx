import { Container, AccountContainer, Footer } from './styles';
import { Header } from '../components/Header';
import { Account } from '../components/Account';
import { Button } from '../components/Button';
import { CreateAccountModal } from '../CreateAccountModal';
import { useState } from 'react';
import { HomeModal } from '../HomeModal';
//import { TermsModal } from '../TermsModal';

export function Main() {
  const [isCreateAccountModalVisible, setIsCreateAccountModalVisible] = useState(false);
  const [isHomeModalVisible, setIsHomeModalVisible] = useState(false);

  return (
    <>
      <Container>
        <Header />

        <AccountContainer>
          <Account />
        </AccountContainer>

        <Footer>
          <Button onPress={() => setIsHomeModalVisible(true)}>
            Entrar
          </Button>
          <Button onPress={() => setIsCreateAccountModalVisible(true)}>
            Criar Conta
          </Button>
        </Footer>
      </Container>

      <CreateAccountModal
        visible={isCreateAccountModalVisible}
        onClose={() => setIsCreateAccountModalVisible(false)}
      /> {/* Criar conta nova conta de Usuário */}

      <HomeModal
        visible={isHomeModalVisible}
      />
    </>
  );
}
