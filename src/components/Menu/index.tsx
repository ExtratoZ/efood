import * as S from './style';
import { type JSX } from 'react';

type Props = {
  children: JSX.Element;
};

const Menu = ({ children }: Props) => {
  return (
    <S.background>
      <div className="container">
        <S.MenuSection>{children}</S.MenuSection>
      </div>
    </S.background>
  );
};

export default Menu;
