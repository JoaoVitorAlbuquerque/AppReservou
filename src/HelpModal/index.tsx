import { Modal } from 'react-native';
import { CloseAccount, Container, ElementsContainer, ModalBody, PolicyAndTerms, PrivacyAndData } from './styles';
import { MenuHeader } from '../components/MenuHeader';
import { Text } from '../components/Text';
import { PolicyAndTermsModal } from '../PolicyAndTermsModal';
import { useState } from 'react';
import { PrivacyDatasModal } from '../PrivacyDatasModal';
import { CloseAccountModal } from '../CloseAccountModal';

interface HelpModalProps {
  visible: boolean;
  onClose: () => void;
}

export function HelpModal({ visible, onClose }: HelpModalProps) {
  const [isPolicyAndTermsModalVisible, setIsPolicyAndTermsModalVisible] = useState(false);
  const [isPrivacyDatasModalVisible, setIsPrivacyDatasModalVisible] = useState(false);
  const [isCloseAccountModalVisible, setIsCloseAccountModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Container>
          <ModalBody>
            <MenuHeader onClose={onClose}>
              Ajuda
            </MenuHeader>

            <ElementsContainer>
              <PolicyAndTerms onPress={() => setIsPolicyAndTermsModalVisible(true)}>
                <Text style={{ 'margin-left': 11 }} size={16} color="#666">Política e Termos</Text>
                <Text style={{ 'margin-left': 145 }} color="#666" size={24}>{'>'}</Text>
              </PolicyAndTerms>

              <PrivacyAndData onPress={() => setIsPrivacyDatasModalVisible(true)}>
                <Text style={{ 'margin-left': 11 }} size={16} color="#666">Privacidade e Dados</Text>
                <Text style={{ 'margin-left': 145 }} color="#666" size={24}>{'>'}</Text>
              </PrivacyAndData>

              <CloseAccount onPress={() => setIsCloseAccountModalVisible(true)}>
                <Text style={{ 'margin-left': 11 }} size={16} color="#666">Encerrar conta</Text>
                <Text style={{ 'margin-left': 80 }} color="#666" size={24}>{'>'}</Text>
              </CloseAccount>

            </ElementsContainer>
          </ModalBody>
        </Container>
      </Modal>

      <PolicyAndTermsModal
        visible={isPolicyAndTermsModalVisible}
        onClose={() => setIsPolicyAndTermsModalVisible(false)}
      />

      <PrivacyDatasModal
        visible={isPrivacyDatasModalVisible}
        onClose={() => setIsPrivacyDatasModalVisible(false)}
      />

      <CloseAccountModal
        visible={isCloseAccountModalVisible}
        onClose={() => setIsCloseAccountModalVisible(false)}
      />
    </>
  );
}
