import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import {
  $white,
  $primaryContentColor,
  $black,
  $transparent,
  $darkBgColor,
} from '@/styles/_variables';

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 0;
  box-shadow: 2px 4px 8px 3px rgba(0, 0, 0, 0.08);
  font-size: 1.2rem;
  width: 100%;
  margin-top: 3rem;

  //media query mixins
  ${m.desktop(css`
    width: 24rem;
    margin: unset;
  `)}
`;

const SearchInput = styled.input`
  height: 100%;
  border: 0;
  padding-left: 1rem;
  width: 16rem;
`;

const SubmitButton = styled.button`
  text-indent: -999px;
  overflow: hidden;
  width: 1.5rem;
  border: 1px solid transparent;
  background: url('/images/svg/search.svg');
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0.5rem 1rem 0.5rem 1rem;
  cursor: pointer;
`;

export default { SearchBar, SearchInput, SubmitButton };
