import { Button, Tag } from '../../styles';
import star from '../../assets/images/estrela.svg';
import * as S from './styles';

type Props = {
  id: number;
  cover: string;
  title: string;
  highlight: boolean;
  category: string;
  review: number;
  description: string;
};

const Restaurants = ({
  id,
  cover,
  title,
  highlight,
  category,
  review,
  description,
}: Props) => {
   const getDescription = (description: string) => {
    if (description.length > 210) {
      return description.slice(0, 210) + '...'
    }
    return description
  }

  return (
    <S.Item>
      <S.Image src={cover} alt={title} />
      <S.Tags>
        {highlight && <Tag>Destaque da semana</Tag>}
        <Tag>{category}</Tag>
      </S.Tags>
      <S.ItemText>
        <S.TitleSection>
          <h3>{title}</h3>
          <S.Rating>
            {review} <S.Star src={star} alt="estrela" />
          </S.Rating>
        </S.TitleSection>
        <S.Description>{getDescription(description)}</S.Description>
        <Button to={`/perfil/${id}`}>Saiba mais</Button>
      </S.ItemText>
    </S.Item>
  );
};

export default Restaurants;
