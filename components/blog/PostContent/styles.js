import styled, { css } from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primaryContent};
  text-align: left;
  line-height: normal;
  margin: 3rem 0 2rem 0;

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.lgDesktop}) {
      font-size: 2.5rem;
    }
  `}
`;
const Title = styled(H1)``;

const P = styled.p`
  font-size: 2rem;
  font-style: italic;
  text-align: left;
  line-height: normal;
  margin: 0.6rem 0;

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.desktopMinus}) {
      font-size: 1.5rem;
    }
  `}
`;
const SubTitle = styled(P)``;

const ContentContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.6 rem;
  }
  h4 {
    font-size: 1.4 rem;
  }
  h5 {
    font-size: 1.2 rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 828px;
  height: 348px;
  margin: 0 auto;
  img {
    border-color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 10px;
    object-fit: contain;
  }
`;

export default {
  Container,
  Title,
  SubTitle,
  ContentContainer,
  ImageWrapper,
};
