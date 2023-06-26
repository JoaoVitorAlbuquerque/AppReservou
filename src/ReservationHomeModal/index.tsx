import { Modal } from 'react-native';
import { AddressContainer, Container, Form, HourData, Input, Input2, InputData, InputHour, Label, ModalBody, NameContainer, PhoneContainer, SurnameContainer } from './styles';
import { Text } from '../components/Text';
import { MenuHeader } from '../components/MenuHeader';
import { Button } from '../components/Button';
import { useState } from 'react';

interface CreateAccountModalProps {
  visible: boolean;
  onClose: () => void;
}

export function ReservationHomeModal({ visible, onClose }: CreateAccountModalProps) {
  const [reservationHome, setReservationHome] = useState('');

  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
      <Container>
        <MenuHeader onClose={onClose}>
            Reserva a domicílio
        </MenuHeader>

        <ModalBody>
          <Form>
            <NameContainer>
              <Label>
                <Text color="#666">Nome</Text>
              </Label>

              <Input
                placeholderTextColor="#666"
                onChangeText={setReservationHome}
              />
            </NameContainer>

            <SurnameContainer>
              <Label>
                <Text color="#666">Apelido</Text>
              </Label>

              <Input
                placeholderTextColor="#666"
                keyboardType="email-address"
                onChangeText={setReservationHome}
              />
            </SurnameContainer>

            <AddressContainer>
              <Label>
                <Text color="#666">Endereço</Text>
              </Label>

              <Input
                placeholderTextColor="#666"
                keyboardType="phone-pad"
                onChangeText={setReservationHome}
              />
            </AddressContainer>

            <Label>
              <Text color="#666">Telemóvel</Text>
            </Label>
            <PhoneContainer>

              <Input2
                placeholderTextColor="#666"
                onChangeText={setReservationHome}
              />

              <Input
                onChangeText={setReservationHome}
              />
            </PhoneContainer>

            <Label>
              <Text color="#666">Horário</Text>
              <Text color="#666">Data</Text>
            </Label>
            <HourData>
              <InputHour
                placeholderTextColor="#666"
                onChangeText={setReservationHome}
              />

              <Text size={52} color="#666">:</Text>

              <InputHour
                placeholderTextColor="#666"
                onChangeText={setReservationHome}
              />

              <InputData
                placeholderTextColor="#666"
                onChangeText={setReservationHome}
              />
            </HourData>

            <Button onPress={() => alert('Pressionou')} disabled={reservationHome.length === 0}>
              Reservar
            </Button>
          </Form>
        </ModalBody>

      </Container>
    </Modal>
  );
}
