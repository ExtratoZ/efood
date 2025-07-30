import logo from '../../assets/images/logo.svg';
import * as S from './styles';
import { Section } from '../../styles';
import { Link } from 'react-router-dom';

const Header = () => (
  <S.Background>
    <div className="container">
      <Section>
        <Link to={'/'}>
          <S.Logo src={logo} alt="Logo Efood" />
        </Link>
        <S.Description>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Description>
      </Section>
    </div>
  </S.Background>
);

export default Header;
