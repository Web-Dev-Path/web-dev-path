import styled, { css } from 'styled-components';
import Link from 'next/link';
import * as m from '@/styles/_mixins';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;

  //media query mixins
  ${m.tablet(css`
    justify-content: flex-start;
  `)}

  & > div {
    //media query mixins
    ${m.desktop(css`
      flex-basis: 48%;
    `)}

    //media query mixins
    ${m.largeDesktop(css`
      flex-basis: 32%;
    `)}
  }

  &::after {
    //media query mixins
    ${m.tablet(css`
      content: '';
      flex: auto;
    `)}

    ${m.desktop(css`
      content: unset;
    `)}
  }
`;

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

export default {
  BottomLink,
  ViewAllBottomLink,
  BackBottomLink,
  PostContainer,
  BlogContainer,
};

// .blogContainer {
//     display: flex;
//     flex-direction: column;
//     margin: 3rem 0;
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
