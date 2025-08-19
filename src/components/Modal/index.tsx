import type { JSX } from 'react';
import * as S from './styles';

type Props = {
  children: JSX.Element
  isVisible: boolean;
  onClose: () => void;
};

export const Modal = ({ children, isVisible }: Props) => {
  return (
    <S.Modal className={isVisible ? 'visible' : ''}>
      <S.ModalContent>
        {children}
      </S.ModalContent>
      <div className="overlay"></div>
    </S.Modal>
  );
};
