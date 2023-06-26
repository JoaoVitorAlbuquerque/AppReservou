import { Text } from '../Text';
import { Container, LineFive, LineFour, LineOne, LineThree, LineTwo, Service } from './styles';

export function HomeService() {
  return (
    <Container>
      <LineOne>
        <Service>
          <Text size={11} color="#666">Barbeiro</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Esteticista</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Massagista</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Encanador</Text>
        </Service>
      </LineOne>

      <LineTwo>
        <Service>
          <Text size={11} color="#666">Manicure</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Fotógrafo</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Mecânico</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Gincho</Text>
        </Service>
      </LineTwo>

      <LineThree>
        <Service>
          <Text size={11} color="#666">Chaveiro</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Personal</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Técnico</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Tatuador</Text>
        </Service>
      </LineThree>

      <LineFour>
        <Service>
          <Text size={11} color="#666">Cozinheiro</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Diarista</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Terapeuta</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Pintor</Text>
        </Service>
      </LineFour>

      <LineFive>
        <Service>
          <Text size={11} color="#666">Prof de Inglês</Text>
        </Service>
        <Service>
          <Text size={11} color="#666">Prof de Informática</Text>
        </Service>
      </LineFive>

    </Container>
  );
}
