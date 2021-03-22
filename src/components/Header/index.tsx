import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
interface HeaderProps {
  onClick: () => void;
}
export function Header({ onClick }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onClick}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
