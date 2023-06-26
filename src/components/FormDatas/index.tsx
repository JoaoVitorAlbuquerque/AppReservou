import { Text } from '../Text';
import { Container, Form, Input, Label } from './styles';

interface FormDatasProps {
  children: string;
  childrenP: string;
  childrenK: string;
}

export function FormDatas({ children, childrenP, childrenK }: FormDatasProps) {
  return (
    <>
      <Container>
        <Form>
          <Label>
            <Text color="#666">{children}</Text>
          </Label>

          <Input
            placeholder={childrenP}
            placeholderTextColor="#666"
            keyboardType={childrenK}
          />
        </Form>;
      </Container>
    </>
  );
}
