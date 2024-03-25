import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktopMinus}) {
      justify-content: space-between;
    }
  `}
`;

const RowAlignLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

export default { Row, RowAlignLeft };
