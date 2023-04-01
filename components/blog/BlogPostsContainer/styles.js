import styled, { css } from 'styled-components';
import Link from 'next/link';
import * as m from '@/styles/_mixins';
import {
  $white,
  $primaryContentColor,
  $black,
  $transparent,
  $darkBgColor,
} from '@/styles/_variables';

const BottomLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  display: block;
  text-align: center;
`;

const ViewAllBottomLink = styled(BottomLink)`
  top: -3rem;

  //media query mixins
  ${m.desktop(css`
    float: right;
    top: -5rem;
  `)}
`;

const BackBottomLink = styled(BottomLink)`
  top: -2rem;

  //media query mixins
  ${m.desktop(css`
    float: left;
    top: -1rem;
  `)}
`;

export default { BottomLink, ViewAllBottomLink, BackBottomLink };

// .blogContainer {
//     display: flex;
//     flex-direction: column;
//     margin: 3rem 0;
//   }

//   .bottomLink {
//     font-size: 1.5rem;
//     font-weight: bold;
//     position: relative;
//     display: block;
//     text-align: center;
//   }

//   .viewAll {
//     top: -3rem;
//     @include desktop {
//       float: right;
//       top: -5rem;
//     }
//   }

//   .backLink {
//     top: -2rem;

//     @include desktop {
//       float: left;
//       top: -1rem;
//     }
//   }

//   .blogSearch {
//     display: flex;
//     padding-top: 2.5rem;
//     justify-content: space-between;
//     flex-direction: column-reverse;
//     align-items: flex-start;

//     @include desktop {
//       align-items: center;
//       flex-direction: row;
//     }
//   }

//   .postContainer {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin-bottom: 3rem;

//     @include tablet {
//       justify-content: flex-start;
//     }
//   }

//   .postContainer > div {
//     @include desktop {
//       flex-basis: 48%;
//     }

//     @include large-desktop {
//       flex-basis: 32%;
//     }
//   }

//   .postContainer::after {
//     @include tablet {
//       content: '';
//       flex: auto;
//     }

//     @include desktop {
//       content: unset;
//     }
//   }
