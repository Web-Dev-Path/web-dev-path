import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import {
  $white,
  $primaryContentColor,
  $black,
  $transparent,
  $darkBgColor,
} from '@/styles/_variables';

const SubmitButton = styled.button`
  padding: 0.3rem 0;
  min-width: 12rem;
  font-size: 1.2rem;
  color: ${$white};
  background-color: ${$primaryContentColor};
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  display: block;
  border: 1px solid ${$primaryContentColor};
  ${m.transition('all 0.3s ease')};

  &:hover {
    color: ${$primaryContentColor};
    background-color: ${$transparent};
  }

  //media query mixins
  ${m.desktop(css`
    margin-left: auto;
    font-size: 1.5rem;
    min-width: 16rem;
    padding: 0.5rem 2rem;
  `)}

  //check props for button variations
  ${props =>
    props.$buttonType === 'newsletter__button' ? NewsLetterButton : ''}
`;

const NewsLetterButton = css`
  border-radius: 1.2rem;
  font-size: 1.2rem;
  background-color: ${$darkBgColor};
  padding: 0.3rem 0;

  &:hover {
    background-color: ${$transparent};
    color: ${$darkBgColor};
    border: 1px solid #{$darkBgColor};
  }

  //media query mixins
  ${m.largeDesktop(css`
    min-width: 12rem;
    border-radius: 3rem;
    padding: 0.7rem 0;
  `)}
`;

export default { SubmitButton };
