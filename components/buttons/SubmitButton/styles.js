import styled, { css } from 'styled-components';
// import variables from '@/styles/_variables';
import {
  $white,
  $primaryContentColor,
  $black,
  $transparent,
} from '@/styles/_variables';

import * as m from '@/styles/_mixins';

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
`;
/*
.btn {
    padding: 0.3rem 0;
    min-width: 12rem;
    font-size: 1.2rem;
    color: $white;
    background-color: $primary-content-color;
    border-radius: 2rem;
    cursor: pointer;
    font-weight: bold;
    text-align: center;
    display: block;
    border: 1px solid $primary-content-color;
    @include transition(all 0.3s ease);
  
    @include desktop {
      margin-left: auto;
      font-size: 1.5rem;
      min-width: 16rem;
      padding: 0.5rem 2rem;
    }
  
    &:hover {
      color: $primary-content-color;
      background-color: $transparent;
    }
  
    &.newsletter__button {
      border-radius: 1.2rem;
      font-size: 1.2rem;
      background-color: $dark-bg-color;
      padding: 0.3rem 0;
  
      &:hover {
        background-color: $transparent;
        color: $dark-bg-color;
        border: 1px solid $dark-bg-color;
      }
  
      @include large-desktop {
        min-width: 12rem;
        border-radius: 3rem;
        padding: 0.7rem 0;
      }
    }
  }
  */

export default { SubmitButton };
