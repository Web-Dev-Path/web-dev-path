import styled, { css } from 'styled-components';
// import variables from '@/styles/_variables';
import {
  $white,
  $primaryContentColor,
  $black,
  $transparent,
} from '@/styles/_variables';

import { transition } from '@/styles/_mixins';

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
  ${transition('all 0.3s ease')};

  &:hover {
    text-decoration: none;
  }
  ${props => (props.$colorScheme === 'inverted-grey' ? invertedGrey : '')}
  ${props => (props.$colorScheme === 'inverted-white' ? invertedWhite : '')}
`;

export default { ButtonLink };
