import styled, { css } from 'styled-components';
import Link from 'next/link';

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

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      justify-content: flex-start;
    }
  `}

  & > div {
    ${props => css`
      @media (min-width: ${props.theme.breakpoints.desktop}) {
        flex-basis: 48%;
      }
    `}

    //media query mixins
    ${props => css`
      @media (min-width: ${props.theme.breakpoints.lgDesktop}) {
        miflex-basis: 32%;
      }
    `}
  }

  &::after {
    ${props => css`
      @media (min-width: ${props.theme.breakpoints.tablet}) {
        content: '';
        flex: auto;
      }
    `}

    ${props => css`
      @media (min-width: ${props.theme.breakpoints.desktop}) {
        content: unset;
      }
    `}
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

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      float: right;
      top: -5rem;
    }
  `}
`;

const BackBottomLink = styled(BottomLink)`
  top: -2rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      float: left;
      top: -1rem;
    }
  `}
`;

export default {
  BottomLink,
  ViewAllBottomLink,
  BackBottomLink,
  PostContainer,
  BlogContainer,
};
