import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import Container from '../Container/Container';
import Image from 'next/image';
import addContentsCss from './addContentsCss';
import {
  $lgDesktopBreakpoint,
  $primaryContentColor,
} from '@/styles/_variables';

const TwoColumnWrapper = styled.section`
  align-self: stretch;
  color: ${props => (props.$color ? props.$color : '')};
  background-color: ${props => (props.$bgColor ? props.$bgColor : '')};
`;

const InnerContainer = styled(Container)`
  padding: 5rem 0;
  margin: 0 auto;
  width: 90%;
  max-width: ${$lgDesktopBreakpoint};

  //media query mixins
  ${m.desktop(css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  `)}

  //add CSS based on content type
  ${props =>
    addContentsCss({
      $contentType: props.$contentType,
      componentName: 'InnerContainer',
    })}
`;

const InnerContent = styled.div`
  margin-bottom: 5rem;

  //media query mixins
  ${m.desktop(css`
    flex-basis: 50%;
    margin-bottom: 0;
  `)}

  //add CSS based on content type
  ${props =>
    addContentsCss({
      $contentType: props.$contentType,
      componentName: 'InnerContent',
    })}
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

  //add CSS based on content type
  ${props =>
    addContentsCss({
      $contentType: props.$contentType,
      componentName: 'Content',
    })}
`;

const InnerImageWrapper = styled.div`
  width: 100%;
  height: 34rem;
  position: relative;

  //media query mixins
  ${m.desktop(css`
    width: 25rem;
  `)}

  //add CSS based on content type
  ${props =>
    addContentsCss({
      $contentType: props.$contentType,
      componentName: 'InnerImageWrapper',
    })}
`;

const InnerImage = styled(Image)`
  border-radius: 0.25rem;
  object-fit: cover;

  //add CSS based on content type
  ${props =>
    addContentsCss({
      $contentType: props.$contentType,
      componentName: 'InnerImage',
    })}
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

// //Exports
// :export {
//   white: $white;
//   primary: $primary-content-color;
//   primaryAccent: $primary-accent-color;
//   lightBgColor: $light-bg-color;
// }
