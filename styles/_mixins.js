import styled, { css } from 'styled-components';
import {
  $smMobileBreakpoint,
  $mobileBreakpoint,
  $lgMobileBreakpoint,
  $tabletBreakpoint,
  $desktopBreakpointMinus,
  $desktopBreakpoint,
  $desktopBreakpointPlus,
  $mediumDesktopBreakpoint,
  $lgDesktopBreakpoint,
  $xlBreakpoint,
} from './_variables';

export const transition = $args => css`
  -webkit-transition: ${$args};
  -moz-transition: ${$args};
  -ms-transition: ${$args};
  -o-transition: ${$args};
  transition: ${$args};
`;

export const tablet = content => css`
  @media (min-width: ${$tabletBreakpoint}) {
    ${content}
  }
`;

export const desktop = content => css`
  @media (min-width: ${$desktopBreakpoint}) {
    ${content}
  }
`;

export const desktopBreakpointPlus = content => css`
  @media (min-width: ${$desktopBreakpointPlus}) {
    ${content}
  }
`;

export const mediumDesktop = content => css`
  @media (min-width: ${$mediumDesktopBreakpoint}) {
    ${content}
  }
`;

export const largeDesktop = content => css`
  @media (min-width: ${$lgDesktopBreakpoint}) {
    ${content}
  }
`;

export const desktopBreakpointMinus = content => css`
  @media (max-width: ${$desktopBreakpointMinus}) {
    ${content}
  }
`;

export const mobile = content => css`
  @media (max-width: ${$lgMobileBreakpoint}) {
    ${content}
  }
`;

export const smallMobile = content => css`
  @media (max-width: ${$smMobileBreakpoint}) {
    ${content}
  }
`;
