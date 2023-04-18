import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  //media query mixins
  ${m.desktopBreakpointMinus(css`
    justify-content: space-between;
  `)}

  //check props to inject alignment css
  ${props => (props.$alignment === 'align__left' ? AlignLeft : '')}
`;

const AlignLeft = css`
  justify-content: left !important;
`;

export default { Row };
