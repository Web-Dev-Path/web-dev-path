import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import {
  $transparent,
  $headingFont,
  $primaryContentColor,
} from '@/styles/_variables';

const Card = styled.div`
  margin: 1rem 1rem 0 0.5rem;
  padding: 1rem;
  border-radius: 1.5rem;
  min-height: 35rem;
  background-color: ${$transparent};
  display: flex;
  justify-content: left;
  flex-direction: column;
  width: 100%;

  //media query mixins
  ${m.tablet(css`
    height: 30rem;
    width: 40%;
  `)}

  ${m.mediumDesktop(css`
    min-width: 20%;
    max-width: 20%;
    margin: 1.5rem;
  `)}
`;

const Name = styled.h2`
  font-style: italic;
  font-family: ${$headingFont};
  font-size: 1.5rem !important;
  color: ${$primaryContentColor};
  margin-bottom: 0px;
  line-height: unset;
`;

const H3 = styled.h3`
  font-family: ${$headingFont};
  font-size: 1rem !important;
  color: ${$primaryContentColor};
  text-align: left;
  line-height: normal;
  margin: 0px !important;

  //media query mixins
  ${m.tablet(css`
    font-size: 2rem;
  `)}
`;
const Title = styled(H3)``;
const Position = styled(H3)``;

const Content = styled.div`
  align-items: center;
  margin: auto;
`;

const Paragraph = styled.p`
  font-size: 1rem !important;
  text-align: left;
  line-height: normal;
`;

const LinkWrapper = styled.div`
  font-size: 1rem !important;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 1rem;

  a {
    padding-left: 1rem;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      opacity: 0.6;
      text-decoration: none;
    }
  }
`;

const ImageWrapper = styled.div`
  min-width: 10rem;
  min-height: 10rem;
  position: relative;
  margin: 0.5rem auto;

  img {
    border-radius: 50%;
  }
`;

export default {
  Card,
  Name,
  Title,
  Position,
  Content,
  Paragraph,
  LinkWrapper,
  ImageWrapper,
};
