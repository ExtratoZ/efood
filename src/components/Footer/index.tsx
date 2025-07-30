import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'
import { Section } from '../../styles';
import * as S from './styles'

const Footer = () => (
  <S.Background>
    <div className="container">
      <Section>
        <S.Logo src={logo} alt="logo efood" />
        <S.Social>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
          <S.SocialItem>
            <img src={facebook} alt="facebook" />
          </S.SocialItem>
          <S.SocialLastItem>
            <img src={twitter} alt="twitter" />
          </S.SocialLastItem>
        </S.Social>
        <S.Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Description>
      </Section>
    </div>
  </S.Background>
);

export default Footer;
