import styled, { css } from 'styled-components';
import Bracket from '@/components/decorations/Bracket';
import Stick from '@/components/decorations/Stick';

const HomeBracket = styled(Bracket)`
  left: 0;
  position: absolute;
  transform: translate(10rem, -5rem);

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktopPlus}) {
      transform: translate(50%, -5rem);
      width: 30%;
    }
  `}
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktopMinus}) {
      display: none;
    }
  `}
`;
const HomeStick = styled(Stick)`
  right: 0;
  position: absolute;
  transform: translate(-10rem, -5rem);

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktopPlus}) {
      transform: translate(-50%, -5rem);
      width: 30%;
    }
  `}

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktopMinus}) {
      display: none;
    }
  `}
`;

export default { Bracket: HomeBracket, Stick: HomeStick };
