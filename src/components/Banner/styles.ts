import styled from 'styled-components';
import banner from '../../assets/images/banner.svg'
import { colors } from '../../styles';

export const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${banner}); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
export const Subtitle = styled.h4`
  font-size: 32px;
  font-weight: 100;
  text-trasform: thin;
  padding-top: 24px;
  padding-bottom: 156px;
  color: ${colors.white};
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  padding-bottom: 32px;
  color: ${colors.white};
`