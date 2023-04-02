import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';

const BlogSearch = styled.div`
  display: flex;
  padding-top: 2.5rem;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: flex-start;

  //media query mixins
  ${m.desktop(css`
    align-items: center;
    flex-direction: row;
  `)}
`;

export default { BlogSearch };
