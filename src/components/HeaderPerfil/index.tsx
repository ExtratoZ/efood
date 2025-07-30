import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import * as S from './styles'

const HeaderPerfil = () => (
  <S.background>
    <div className="container">
      <S.HeaderPerfilSection>
        <S.Text>Restaurantes</S.Text>
        <Link to={'/'}>
          <S.Logo src={logo} alt="logo efood" />
        </Link>
        <S.Text>0 produto(s) no carrinho</S.Text>
      </S.HeaderPerfilSection>
    </div>
  </S.background>
)

export default HeaderPerfil