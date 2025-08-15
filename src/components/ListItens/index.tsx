import * as S from './styles';

import type { Restaurant } from '../../pages/Home';
import Restaurants from '../Restaurant';

export type Props = {
  restaurant: Restaurant[];
};

const ListItens = ({ restaurant }: Props) => {
  return (
    <div className="container">
      <S.ListSection>
        {restaurant.map((item) => (
          <Restaurants
            key={item.id}
            id={item.id}
            cover={item.capa}
            title={item.titulo}
            highlight={item.destacado}
            category={item.tipo}
            review={item.avaliacao}
            description={item.descricao}
          />
        ))}
      </S.ListSection>
    </div>
  );
};

export default ListItens;
