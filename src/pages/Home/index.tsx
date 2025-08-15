import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ListItens from '../../components/ListItens';

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    id: number;
    nome: string;
    foto: string;
    preco: number;
    descricao: string;
    porcao: string;
  };
};

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <ListItens restaurant={restaurants} />
    </>
  );
};

export default Home;
