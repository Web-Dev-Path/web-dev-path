import styled, { css } from 'styled-components';
import Container from '@/components/containers/Container';
import Image from 'next/image';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      min-height: 100vh;
    }
  `}
`;
const HeaderContent = styled(Container)`
  z-index: 10;
  color: ${({ theme }) => theme.colors.white};
  padding-top: 9%;
`;

const HeaderContentUpper = styled.div`
  max-width: 41rem;
  span {
    color: ${({ theme }) => theme.colors.primaryAccent};
    font-style: italic;
    font-weight: bold;
    line-height: 3.5rem;


    ${props => css`
      @media (min-width: ${props.theme.breakpoints.desktop}) {
        font-size: 4.5rem;
        line-height: 5rem;
      }
    `}
  }
`;

const HeaderContentBottom = styled.div`
  max-width: 19rem;
  padding-bottom: 5rem;

  
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      padding-bottom: 0;
    }
  `}
`;

const ImageBg = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
const Title = styled.h1`
  color: ${props => props.$hasAccent ? ({ theme }) => theme.colors.primaryAccent : 'inherit'};
`;

export default {
  Header,
  HeaderContent,
  HeaderContentUpper,
  HeaderContentBottom,
  ImageBg,
  Title,
};
