import styled, { css } from 'styled-components';
import { Swiper } from 'swiper/react';
import * as m from '@/styles/_mixins';
import { $darkBgColor } from '@/styles/_variables';

const InnerContent = styled.div`
  margin: 0 auto;
  padding-bottom: 4rem;
  justify-content: center;

  //media query mixins
  ${m.desktopBreakpointPlus(css`
    display: flex;
  `)}
`;

const CardColumnSwiper = styled(Swiper)`
  margin-bottom: 5rem;

  & .swiper-pagination-bullet-active {
    background-color: ${$darkBgColor};
  }
`;

export { CardColumnSwiper as Swiper, InnerContent };
