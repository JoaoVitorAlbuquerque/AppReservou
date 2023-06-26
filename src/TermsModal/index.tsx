import { Modal } from 'react-native';
import { Text } from '../components/Text';
import {
  BackToRegisterButton,
  Check,
  Container,
  Footer,
  FooterMain,
  Header,
  MainText,
  ModalBody,
  Overlay,
}from './styles';

import { Button } from '../components/Button';
import { useState } from 'react';
import { HomeModal } from '../HomeModal';
//import { useState } from 'react';

interface TermsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function TermsModal({ visible, onClose }: TermsModalProps) {
  const [isHomeModalVisible, setIsHomeModalVisible] = useState(false);
  //const [Terms, setTerms] = useState('');
  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Overlay>

          <ModalBody>
            <Header>
              <BackToRegisterButton onPress={onClose}>
                <Text size={16} color="#e1b12c">Voltar</Text>
              </BackToRegisterButton>
            </Header>

            <Container>
              <MainText>
                <Text size={14} weight="600">Contrato de Usuário do Reservou</Text>

                <Text size={14}>
                Ao selecionar a caixa de permissão abaixo,
                você concorda com os Termos de Serviço e
                com a Política de Privacidade, incluindo o
                processamento de seus dados pessoais pela
                Reservou. Por favor , observe
                que você pode revogar sua permissão
                quando quiser, enviando um e-mail para reservou@gmail.com.
                </Text>

                <Text size={14}>
                Por favor , tenha em mente que se você
                revogar a permissão, você não poderá usar a
                funcionalidade principal do aplicativo.
                </Text>

                <FooterMain>
                  <Check></Check>

                  <Text size={14} weight="600">Por meio deste , concordo com a Política de Privacidade e com os Termos de Serviço.</Text>

                </FooterMain>
              </MainText>

              <Footer>
                <Button onPress={() => setIsHomeModalVisible(true)}>
                  Continuar
                </Button>
              </Footer>
            </Container>
          </ModalBody>

        </Overlay>
      </Modal>

      <HomeModal
        visible={isHomeModalVisible}
      />
    </>
  );
}
