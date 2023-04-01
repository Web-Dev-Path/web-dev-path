import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import {
  $white,
  $primaryContentColor,
  $black,
  $transparent,
} from '@/styles/_variables';

const ButtonLink = styled.a`
  padding: 0.5rem 2rem;
  color: ${$white};
  background-color: ${$primaryContentColor};
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  min-width: 16rem;
  display: inline-block;
  border: 1px solid ${$primaryContentColor};
  ${m.transition('all 0.3s ease')};

  &:hover {
    text-decoration: none;
  }

  //check props for button variations
  ${props => (props.$colorScheme === 'inverted-grey' ? invertedGrey : '')}
  ${props => (props.$colorScheme === 'inverted-white' ? invertedWhite : '')}
`;

//Color Scheme Variations
const invertedGrey = css`
  &:hover {
    color: ${$primaryContentColor};
    background-color: ${$transparent};
  }
`;

const invertedWhite = css`
  border: 1px solid ${$white};
  color: ${$primaryContentColor};
  background-color: ${$white};
  &:hover {
    color: ${$white};
    background-color: ${$transparent};
  }
`;

export default { ButtonLink };
