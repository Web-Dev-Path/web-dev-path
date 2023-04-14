import styled, { css } from 'styled-components';
import Bracket from '@/components/decorations/Bracket';
import * as m from '@/styles/_mixins';
import { $lightBgColor } from '@/styles/_variables';

const ContactUsContainer = styled.div`
  background-color: ${$lightBgColor};
  height: 42rem;
  position: relative;
  margin-bottom: -10rem;

  //media query mixins
  ${m.mobile(css`
    height: unset;
    padding-bottom: 2rem;
    margin-bottom: 3rem;
  `)}

  ${m.desktopBreakpointMinus(css`
    img {
      display: none;
    }
  `)}

  ${m.desktop(css`
    height: 32rem;
  `)}
`;

const FormAndDecorations = styled.div`
  //media query mixins
  ${m.tablet(css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    bottom: 48%;
    right: 4%;
    z-index: 11;
  `)}

  ${m.desktop(css`
    bottom: 52%;
    right: 8%;
  `)}
`;

const YellowBracket = styled(Bracket)`
  //       -webkit-transform: scaleX(-1);
  //       transform: scaleX(-1);

  //media query mixins
  ${m.mobile(css`
    display: none;
  `)}

  ${m.tablet(css`
    position: absolute;
    top: 28%;
    right: 120%;
    width: 8rem;
  `)}

  ${m.desktop(css`
    top: 25%;
    right: 120%;
  `)}

  ${m.desktopBreakpointPlus(css`
    top: 25%;
    right: 140%;
  `)}
`;

const YellowColon = styled.img`
  //media query mixins
  ${m.desktop(css`
    right: -15%;
  `)}

  ${m.tablet(css`
    position: absolute;
    top: -10%;
    right: -5%;
  `)}
`;

const ResponseMessage = styled.div`
  position: absolute;
  right: 8%;
  bottom: -5%;
  margin: auto;

  //media query mixins
  ${m.mobile(css`
    position: unset;
    margin-top: 1rem;
    padding: 0 2rem;
  `)}

  ${m.smallMobile(css`
    max-width: fit-content;
  `)}
`;
