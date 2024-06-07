import styled, { css } from 'styled-components';

const GreyBG = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 4rem 0 7.5rem 0;
  margin: 4rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  justify-content: center;
  ${props => css`
    @media (max-width: ${props.theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `}
`;
const LogosContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const SplitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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
  GreyBG,
  FlexContainer,
  LogosContainer,
  SplitContainer,
  ImageWrapper,
  IconWrapper,
};
