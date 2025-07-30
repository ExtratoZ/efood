import styled from 'styled-components';
import { colors } from '../../styles';
import background from '../../assets/images/fundo.svg';

export const Background = styled.div`
  background-image: url(${background});
  height: 384px;
`;
export const Logo = styled.img`
  margin-top: 40px;
`;
export const Description = styled.h1`
  color: ${colors.salmon};
  font-weight: 900;
  font-size: 36px;
  padding-top: 138px;
`;
