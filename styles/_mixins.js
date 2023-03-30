import styled, { css } from 'styled-components';
import {
  $smMobileBreakpoint,
  $mobileBreakpoint,
  $lgMobileBreakpoin,
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

export const tablet = () => css`
  @media (min-width: $tabletBreakpoint) {
    @content;
  }
`;

export const desktop = () => css`
  @media (min-width: $desktopBreakpoint) {
    @content;
  }
`;

export const desktopBreakpointPlus = () => css`
  @media (min-width: $desktopBreakpointPlus) {
    @content;
  }
`;

export const mediumDesktop = () => css`
  @media (min-width: $mediumDesktopBreakpoint) {
    @content;
  }
`;

export const largeDesktop = () => css`
  @media (min-width: $largeDesktopBreakpoint) {
    @content;
  }
`;

export const desktopBreakpointMinus = () => css`
  @media (max-width: $desktopBreakpointMinus) {
    @content;
  }
`;

export const mobile = () => css`
  @media (max-width: $lgMobileBreakpoint) {
    @content;
  }
`;

export const smallMobile = () => css`
  @media (max-width: $smMobileBreakpoint) {
    @content;
  }
`;
