import styled from 'styled-components';
import { colors } from '../../styles';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
  color: ${colors.white};

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  &.visible {
    display: flex;
  }
`;
export const ModalContent = styled.div`
  max-width: 1024px;
  z-index: 1;
  padding: 32px;
  display: flex;
  background: ${colors.salmon};
  position: relative;
`;
export const ModalText = styled.div`
  padding-left: 24px;
`
export const ModalTitle = styled.h2`
  font-weight: 900;
  font-size: 18px;
  padding-bottom: 16px;
  line-height: 100%;
`
export const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
`
export const ModalPortion = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-top: 24px;
`
export const ModalButton = styled.button`
  padding: 8px 6px;
  background: ${colors.lightSalmon};
  font-weight: 700;
  font-size: 14px;
  color: ${colors.salmon};
  border: none;
  margin-top: 16px;
  cursor: pointer;
`
export const ModalImage = styled.img`
  max-width: 280px;
  max-height: 280px;
  object-fit: cover;
`
export const ModalClose = styled.img`
  cursor: pointer;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
`