import logo from '../../assets/images/logo.svg';
import * as S from './styles';
import { Section } from '../../styles';

const Header = () => (
  <S.Background>
    <div className="container">
      <Section>
        <S.Logo src={logo} alt="Logo Efood" />
        <S.Description>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Description>
      </Section>
    </div>
  </S.Background>
);

export default Header;
