import styled from "styled-components";
import HeaderImage from '../../assets/images/fundo.svg'
import { colors } from "../../styles";

export const background = styled.div`
  background-image: url(${HeaderImage});
`
export const HeaderPerfilSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0px;
  width: 100%;
  position: relative;
`
export const Text = styled.p`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.salmon};
`
export const Logo = styled.img`
  position: absolute;
  top: 40px;
  left: 448px;
`