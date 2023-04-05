import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import Container from '../Container/Container';
import Image from 'next/image';
import {
  $lgDesktopBreakpoint,
  $primaryContentColor,
} from '@/styles/_variables';

const TwoColumnWrapper = styled.section`
  align-self: stretch;
  color: ${props => (props.$color ? props.$color : '')};
  background-color: ${props => (props.$bgColor ? props.$bgColor : '')};
`;

const InnerContent = styled.div`
  margin-bottom: 5rem;

  //media query mixins
  ${m.desktop(css`
    flex-basis: 50%;
    margin-bottom: 0;
  `)}
`;

const InnerContainer = styled(Container)`
  padding: 5rem 0;
  margin: 0 auto;
  width: 90%;
  max-width: ${$lgDesktopBreakpoint};
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  color: ${props => (props.$color ? props.$color : $primaryContentColor)};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 3.875rem 0 2.5rem;
  max-width: 39rem;
  font-size: 1.5rem;
  line-height: 1.938rem;

  a {
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }
`;

const InnerImageWrapper = styled.div`
  width: 100%;
  height: 34rem;
  position: relative;

  //media query mixins
  ${m.desktop(css`
    width: 25rem;
  `)}
`;

const InnerImage = styled(Image)`
  border-radius: 0.25rem;
  object-fit: cover;
`;

export default {
  TwoColumnWrapper,
  InnerContainer,
  InnerContent,
  Title,
  Content,
  InnerImageWrapper,
  InnerImage,
};
//     // Homepage

//     &.get-involved {
//       @include desktop-breakpoint-minus {
//         padding-bottom: 0;
//       }
//     }

//     &.non-profit {
//       @include desktop-breakpoint-minus {
//         .inner__content {
//           margin-bottom: 0;
//         }
//       }
//     }

//     // end Homepage

//     //About page

//     &.our-process,
//     &.get-started,
//     &.our-purpose,
//     &.our-background,
//     &.questions {
//       .inner__image {
//         height: 10rem;
//         .img {
//           object-fit: contain;
//         }
//       }
//     }

//     &.our-background {
//       .inner__image {
//         @include desktop {
//           height: 15rem;
//         }
//       }
//     }

//     &.our-process {
//       .inner__image {
//         @include desktop {
//           height: 12rem;
//         }
//       }
//     }

//     &.our-purpose {
//       .inner__image {
//         @include desktop {
//           height: 18rem;
//         }
//       }
//     }

//     &.get-started {
//       .inner__image {
//         @include desktop {
//           height: 20rem;
//         }
//       }
//     }

//     &.questions {
//       .inner__image {
//         @include desktop {
//           height: 13rem;
//         }
//       }
//     }

//     &.wanna-learn-more {
//       .content {
//         margin: 0;
//       }

//       .inner__image {
//         height: 10rem;

//         @include desktop {
//           height: 15rem;
//         }

//         .img {
//           object-fit: contain;
//         }
//       }
//     }

//     &.two-text-columns {
//       justify-content: space-evenly;

//       .inner {
//         padding: 0px;
//         margin: 0px;
//       }

//       .inner__content {
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//       }

//       h2 {
//         font-size: 2rem;
//         line-height: 2.5rem;
//       }

//       .inner {
//         margin: 0px;
//         padding: 0px;
//       }

//       .inner__content {
//         flex-basis: unset;

//         @include desktop {
//           width: 25rem;
//         }
//       }

//       a {
//         margin-top: auto;
//         color: $light-bg-color;
//       }

//       a:hover {
//         color: $primary-content-color;
//       }
//     }

//     &.second-text-column {
//       height: 100%;
//       width: 100%;

//       .inner {
//         height: 100%;
//       }

//       .inner__content {
//         height: 100%;
//       }
//     }

//     &.get-started,
//     &.questions {
//       padding-bottom: 0px;
//       .inner__image {
//         display: none;

//         @include desktop {
//           display: unset;
//         }
//       }

//       @include desktop {
//         padding-bottom: 5rem;
//       }
//     }

//     // end About page

//     @include desktop {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       flex-wrap: wrap;
//     }
//   }
// }

// //Exports
// :export {
//   white: $white;
//   primary: $primary-content-color;
//   primaryAccent: $primary-accent-color;
//   lightBgColor: $light-bg-color;
// }
