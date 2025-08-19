import type { Restaurant } from '../../pages/Home';
import * as S from './styles';

type Props = {
  banner: Restaurant;
};

const Banner = ({ banner }: Props) => {
  return (
    <S.Background picture={banner.capa}>
      <div className="container">
        <S.Subtitle>{banner.tipo}</S.Subtitle>
        <S.Title>{banner.titulo}</S.Title>
      </div>
    </S.Background>
  );
};

export default Banner;
