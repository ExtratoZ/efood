import styled from 'styled-components';
import { colors } from '../../styles';

export const Background = styled.div`
  background: ${colors.lightSalmon};
  padding: 40px 0;
`
export const Social = styled.ul`
  display: flex;
  justify-content: center;
`
export const Logo = styled.img`
  margin-bottom: 32px;
`
export const SocialItem = styled.li`
  margin: 0 8px;
`
export const SocialLastItem = styled.li`
  margin-right: 36px;
`
export const Description = styled.p`
  display: inline-flex;
  justify-content: center;
  width: 420px;
  font-size: 10px;
  margin-top: 80px;
  color: ${colors.salmon};
`