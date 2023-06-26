import { Modal, StyleSheet } from 'react-native';
import { Text } from '../components/Text';
import { Camera, Container, Header, IconBackContainer, ModalBody, ProfilePhoto, ElementsContainer, MyData, ChangePassword, Help } from './styles';
import { IconBack } from '../components/IconeVoltar';
import { MyDataModal } from '../MyDataModal';
import { useState } from 'react';
import { ProfileChangePasswordModal } from '../ProfileChangePasswordModal';
import { HelpModal } from '../HelpModal';
import { Image } from 'react-native';

const styles = StyleSheet.create({
  Camera: {
    height: 24,
    width: 24,
  },
  Editar: {
    height: 24,
    width: 24,
  },
  Cadeado: {
    height: 20,
    width: 20,
  },
  Interrogacao: {
    height: 20,
    width: 20,
  },
});

interface ProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ProfileInfoModal({visible, onClose}: ProfileModalProps) {
  const [isMyDataModalVisible, setIsMyDataModalVisible] = useState(false);
  const [isProfileChangePasswordModalVisible, setIsProfileChangePasswordModalVisible] = useState(false);
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={visible}
        animationType='slide'
      >
        <Container>

          <ModalBody>
            <Header>
              <IconBackContainer>
                <IconBack onPress={onClose}/>
              </IconBackContainer>

              <ProfilePhoto>
                <Camera>
                  <Image
                    style={styles.Camera}
                    source={require('../../uploads/Camera.png')}
                  />
                </Camera>
              </ProfilePhoto>

              <Text size={16} color="#f8f8f8">Usuário Teste</Text>
            </Header>

            <ElementsContainer>
              <MyData onPress={() => setIsMyDataModalVisible(true)}>
                <Image
                  style={styles.Editar}
                  source={require('../../uploads/Editar.png')}
                />

                <Text style={{ 'margin-left': 11 }} size={16} color="#666">Meus Dados</Text>
                <Text style={{ 'margin-left': 145 }} color="#666" size={24}>{'>'}</Text>
              </MyData>

              <ChangePassword onPress={() => setIsProfileChangePasswordModalVisible(true)}>
                <Image
                  style={styles.Cadeado}
                  source={require('../../uploads/Cadeado.png')}
                />

                <Text style={{ 'margin-left': 11 }} size={16} color="#666">Alterar senha</Text>
                <Text style={{ 'margin-left': 145 }} color="#666" size={24}>{'>'}</Text>
              </ChangePassword>

              <Help onPress={() => setIsHelpModalVisible(true)}>
                <Image
                  style={styles.Interrogacao}
                  source={require('../../uploads/Interrogacao.png')}
                />

                <Text style={{ 'margin-left': 11 }} size={16} color="#666">Ajuda</Text>
                <Text style={{ 'margin-left': 80 }} color="#666" size={24}>{'>'}</Text>
              </Help>

            </ElementsContainer>

          </ModalBody>

        </Container>
      </Modal>

      <MyDataModal
        visible={isMyDataModalVisible}
        onClose={() => setIsMyDataModalVisible(false)}
      />

      <ProfileChangePasswordModal
        visible={isProfileChangePasswordModalVisible}
        onClose={() => setIsProfileChangePasswordModalVisible(false)}
      />

      <HelpModal
        visible={isHelpModalVisible}
        onClose={() => setIsHelpModalVisible(false)}
      />
    </>
  );
}
