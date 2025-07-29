import * as S from './styles';
import { Button } from '../../styles';
import haiko from '../../assets/images/haiko.svg';
import trattoria from '../../assets/images/trattoria.svg';
import star from '../../assets/images/estrela.svg';

const ListItens = () => (
  <div className="container">
    <S.ListSection>
      <S.Item>
        <S.Image src={haiko} alt="haiko sushi" />
        <S.Tags>
          <Button>Destaque da Semana</Button>
          <Button>Japonesa</Button>
        </S.Tags>
        <S.ItemText>
          <S.TitleSection>
            <h3>Hioki Sushi</h3>
            <S.Rating>
              4.9 <S.Star src={star} alt="estrela" />
            </S.Rating>
          </S.TitleSection>
          <S.Description>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </S.Description>
          <Button>
            <a href="#">Saiba mais</a>
          </Button>
        </S.ItemText>
      </S.Item>
      <S.Item>
        <S.Image src={trattoria} alt="La dolce vita trattoria" />
        <S.Tags>
          <Button>Italiana</Button>
        </S.Tags>
        <S.ItemText>
          <S.TitleSection>
            <h3>La Dolce Vita Tratorria</h3>
            <S.Rating>
              4.6 <S.Star src={star} alt="estrela" />
            </S.Rating>
          </S.TitleSection>
          <S.Description>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </S.Description>
          <Button>
            <a href="#">Saiba mais</a>
          </Button>
        </S.ItemText>
      </S.Item>
      <S.Item>
        <S.Image src={haiko} alt="haiko sushi" />
        <S.Tags>
          <Button>Destaque da Semana</Button>
          <Button>Japonesa</Button>
        </S.Tags>
        <S.ItemText>
          <S.TitleSection>
            <h3>Hioki Sushi</h3>
            <S.Rating>
              4.9 <S.Star src={star} alt="estrela" />
            </S.Rating>
          </S.TitleSection>
          <S.Description>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </S.Description>
          <Button>
            <a href="#">Saiba mais</a>
          </Button>
        </S.ItemText>
      </S.Item>
      <S.Item>
        <S.Image src={trattoria} alt="La dolce vita trattoria" />
        <S.Tags>
          <Button>Italiana</Button>
        </S.Tags>
        <S.ItemText>
          <S.TitleSection>
            <h3>La Dolce Vita Tratorria</h3>
            <S.Rating>
              4.6 <S.Star src={star} alt="estrela" />
            </S.Rating>
          </S.TitleSection>
          <S.Description>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </S.Description>
          <Button>
            <a href="#">Saiba mais</a>
          </Button>
        </S.ItemText>
      </S.Item>
      <S.Item>
        <S.Image src={haiko} alt="haiko sushi" />
        <S.Tags>
          <Button>Destaque da Semana</Button>
          <Button>Japonesa</Button>
        </S.Tags>
        <S.ItemText>
          <S.TitleSection>
            <h3>Hioki Sushi</h3>
            <S.Rating>
              4.9 <S.Star src={star} alt="estrela" />
            </S.Rating>
          </S.TitleSection>
          <S.Description>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </S.Description>
          <Button>
            <a href="#">Saiba mais</a>
          </Button>
        </S.ItemText>
      </S.Item>
      <S.Item>
        <S.Image src={trattoria} alt="La dolce vita trattoria" />
        <S.Tags>
          <Button>Italiana</Button>
        </S.Tags>
        <S.ItemText>
          <S.TitleSection>
            <h3>La Dolce Vita Tratorria</h3>
            <S.Rating>
              4.6 <S.Star src={star} alt="estrela" />
            </S.Rating>
          </S.TitleSection>
          <S.Description>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </S.Description>
          <Button>
            <a href="#">Saiba mais</a>
          </Button>
        </S.ItemText>
      </S.Item>
    </S.ListSection>
  </div>
);

export default ListItens;
