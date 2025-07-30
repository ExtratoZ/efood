import { styled } from 'styled-components';
import { colors } from '../../styles';

export const ListSection = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;
`;
export const Item = styled.li`
  background: ${colors.white};
  border: 1px solid ${colors.salmon};
  position: relative;
  width: 427px;
  height: 398px;
`
export const ItemText = styled.div`
  color: ${colors.salmon};
  padding: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  padding-bottom: 16px;
`
export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  font-weight: 700;
  font-size: 18px;
`
export const Star = styled.img`
  margin-left: 4px;
`
export const Rating = styled.span`
  display: inline-flex;
  align-items: center;
`
export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Image = styled.img`
  max-width: 425px;
`