import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import HeaderPerfil from '../../components/HeaderPerfil';
import Menu from '../../components/Menu';
import type { Restaurant } from '../Home';
import { useParams } from 'react-router-dom';
import {
  Product,
  Title,
  Text,
  Button,
  Image,
} from '../../components/Menu/style';

const Restaurants = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant>();

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
      .catch((error) => console.error(error));
  }, [id]);

  const getDescription = (description: string) => {
    if (description.length > 120) {
      return description.slice(0, 120) + '...';
    }
    return description;
  };

  if (!restaurant) return <h3>Carregando...</h3>;

  return (
    <>
      <HeaderPerfil />
      <Banner banner={restaurant}/>
      <Menu>
        <>
          {Array.isArray(restaurant.cardapio) &&
            restaurant.cardapio.map((prato) => (
              <Product key={prato.id}>
                <Image src={prato.foto} alt={prato.nome} />
                <Title>{prato.nome}</Title>
                <Text>{getDescription(prato.descricao)}</Text>
                <Button>Mais detalhes</Button>
              </Product>
            ))}
        </>
      </Menu>
    </>
  );
};

export default Restaurants;
