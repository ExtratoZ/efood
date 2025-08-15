import styled from "styled-components";
import { colors } from "../../styles";

export const background = styled.div`
  background: ${colors.background};
  padding: 64px 0;
`
export const MenuSection = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px; 
`
export const Product = styled.li`
  background: ${colors.salmon};
  padding: 8px;
  max-height: 338px;
  color: ${colors.lightSalmon};
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
  padding: 8px 0;
`
export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 8px; 
`
export const Button = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.salmon};
  background: ${colors.lightSalmon};
  padding: 4px 0;
`
export const Image = styled.img`
  max-width: 304px;
  width: 100%;
  height: 166px;
  object-fit: cover;
`