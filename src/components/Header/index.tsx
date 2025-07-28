import logo from '../../assets/images/logo.svg';
import * as S from './styles';

const Header = () => (
  <S.Background>
    <div className="container">
      <S.Section>
        <S.Logo src={logo} alt="Logo Efood" />
        <S.Description>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Description>
      </S.Section>
    </div>
  </S.Background>
);

export default Header;
