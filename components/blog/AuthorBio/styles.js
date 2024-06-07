import styled, { css } from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: center;
  ${props => css`
    @media (max-width: ${props.theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `}
`;
const LogosContainer = styled.div`
  display: flex;
  gap: 15px;
`;
const SplitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  text-align: left;
  line-height: normal;
`;

const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem !important;
  color: ${({ theme }) => theme.colors.primaryContent};
  text-align: left;
  line-height: normal;
  margin: 1.5rem 0 !important;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  `}
`;
const Title = styled(H3)``;

const ImageWrapper = styled.div`
  min-width: 16rem;
  min-height: 16rem;
  position: relative;

  img {
    max-width: 16rem;
    max-height: 16rem;
    border-width: 3px;
    border-color: ${({ theme }) => theme.colors.darkGrey};
    border-style: solid;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export default {
  FlexContainer,
  LogosContainer,
  SplitContainer,
  Title,
  Paragraph,
  ImageWrapper,
  IconWrapper,
};
