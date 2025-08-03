import styled, { css } from 'styled-components';
import Stick from '@/components/decorations/Stick';

const HomeStick = styled(Stick)`
  right: 0;
  position: absolute;
  transform: translate(-10rem, -5rem);

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.desktopPlus}) {
      transform: translate(-50%, -5rem);
      width: 30%;
    }
  `}

  ${props => css`
    @media (max-width: ${props.theme.breakpoints.desktopMinus}) {
      display: none;
    }
  `}
`;

export default { Stick: HomeStick };
