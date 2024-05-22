import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';

const InnerContent = styled.div`
  margin: 0 auto;
  padding-bottom: 4rem;
  justify-content: center;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktopPlus}) {
      display: flex;
    }
  `}
`;

const CardColumnSwiper = styled(Swiper)`
  margin-bottom: 5rem;

  & .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.darkBg};
  }
`;

export { CardColumnSwiper as Swiper, InnerContent };
