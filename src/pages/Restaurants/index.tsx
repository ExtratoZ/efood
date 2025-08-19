import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import HeaderPerfil from '../../components/HeaderPerfil';
import Menu from '../../components/Menu';
import close from '../../assets/images/close 1.png'
import type { Restaurant } from '../Home';
import { useParams } from 'react-router-dom';
import {
  Product,
  Title,
  Text,
  Button,
  Image,
} from '../../components/Menu/style';
import { Modal } from '../../components/Modal';
import {
  ModalButton,
  ModalDescription,
  ModalImage,
  ModalPortion,
  ModalText,
  ModalTitle,
  ModalClose
} from '../../components/Modal/styles';

type Prato = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

interface ModalState {
  isVisible: boolean;
}

const Restaurants = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null);
  const [modal, setModal] = useState<ModalState>({ isVisible: false });

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

   const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };

  const FormatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  if (!restaurant) return <h3>Carregando...</h3>;

  return (
    <>
      <HeaderPerfil />
      <Banner banner={restaurant} />
      <Menu>
        <>
          {Array.isArray(restaurant.cardapio) &&
            restaurant.cardapio.map((prato) => (
              <Product key={prato.id}>
                <Image src={prato.foto} alt={prato.nome} />
                <Title>{prato.nome}</Title>
                <Text>{getDescription(prato.descricao)}</Text>
                <Button
                  onClick={
                    (() => (setPratoSelecionado(prato),
                    setModal({ isVisible: true })))
                  }
                >
                  Mais detalhes
                </Button>
              </Product>
            ))}
        </>
      </Menu>
      <Modal isVisible={modal.isVisible} onClose={closeModal}>
        <>
          {pratoSelecionado && (
            <>
              <ModalImage
                src={pratoSelecionado.foto}
                alt={pratoSelecionado.nome}
              />
              <ModalText>
                <ModalClose src={close} alt="botão fechar" onClick={() => closeModal()} />
                <ModalTitle>{pratoSelecionado.nome}</ModalTitle>
                <ModalDescription>
                  {pratoSelecionado.descricao}
                </ModalDescription>
                <ModalPortion>Serve: de {pratoSelecionado.porcao}</ModalPortion>
                <ModalButton>
                  Adicionar ao carrinho - {FormatPrice(pratoSelecionado.preco)}
                </ModalButton>
              </ModalText>
            </>
          )}
        </>
      </Modal>
    </>
  );
};

export default Restaurants;
