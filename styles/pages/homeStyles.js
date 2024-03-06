import styled, { css } from 'styled-components';
import Bracket from '@/components/decorations/Bracket';
import Stick from '@/components/decorations/Stick';
import * as m from '@/styles/_mixins';

const HomeBracket = styled(Bracket)`
  left: 0;
  position: absolute;
  transform: translate(10rem, -5rem);

  //media query mixins
  ${m.desktopBreakpointPlus(css`
    transform: translate(50%, -5rem);
    width: 30%;
  `)}

  ${m.desktopBreakpointMinus(css`
    display: none;
  `)}
`;
const HomeStick = styled(Stick)`
  right: 0;
  position: absolute;
  transform: translate(-10rem, -5rem);

  //media query mixins
  ${m.desktopBreakpointPlus(css`
    transform: translate(-50%, -5rem);
    width: 30%;
  `)}

  ${m.desktopBreakpointMinus(css`
    display: none;
  `)}
`;

export default { Bracket: HomeBracket, Stick: HomeStick };
