import { Modal } from 'react-native';
import { Text } from '../components/Text';
import { Container, ElementsContainer, ModalBody, PolicyPrivacy, TermsUse } from './styles';
import { MenuHeader } from '../components/MenuHeader';
import { PolicyTermsModal } from '../PolicyTermsModal';
import { useState } from 'react';
import { PolicyPrivacyModal } from '../PolicyPrivacyModal';

interface PolicyAndTermsProps {
  visible: boolean;
  onClose: () => void;
}

export function PolicyAndTermsModal({ visible, onClose }: PolicyAndTermsProps) {
  const [isPolicyTermsModalVisible, setIsPolicyTermsModalVisible] = useState(false);
  const [isPolicyPrivacyModalVisible, setIsPolicyPrivacyModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Container>

          <ModalBody>
            <MenuHeader onClose={onClose}>
            Política e Termos
            </MenuHeader>

            <ElementsContainer>

              <TermsUse onPress={() => setIsPolicyTermsModalVisible(true)}>
                <Text style={{ 'margin-left': 11 }} size={16} color="#666">Política e Termos</Text>
              </TermsUse>

              <PolicyPrivacy onPress={() => setIsPolicyPrivacyModalVisible(true)}>
                <Text style={{ 'margin-left': 11 }} size={16} color="#666">Privacidade e Dados</Text>
              </PolicyPrivacy>

            </ElementsContainer>
          </ModalBody>

        </Container>
      </Modal>

      <PolicyTermsModal
        visible={isPolicyTermsModalVisible}
        onClose={() => setIsPolicyTermsModalVisible(false)}
      />

      <PolicyPrivacyModal
        visible={isPolicyPrivacyModalVisible}
        onClose={() => setIsPolicyPrivacyModalVisible(false)}
      />
    </>
  );
}
