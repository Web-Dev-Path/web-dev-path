// @use './variables' as *;
// @use './mixins' as *;

import styled, { css } from 'styled-components';
import * as m from '@/styles/_mixins';
import {
  $white,
  $transparent,
  $darkBgColor,
  $primaryContentColor,
  $primaryAccentColor,
  $headingFont,
  $boxShadow,
  $boxShadowBottom,
  $lgDesktopBreakpoint,
} from '@/styles/_variables';

const Header = styled.header`
  color: ${$white};
  background-color: ${$transparent};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  height: 4.5rem;
  z-index: 100;

  //media query mixins
  ${m.desktop(css`
    height: auto;
  `)}
`;

const NavWrapper = styled.div`
  //check props for sticky behavior
  ${props => (props.$isSticky ? NavWrapperSticky : '')}
`;

const NavWrapperSticky = css`
  background-color: ${$white};
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 4.5rem;
  box-shadow: ${$boxShadow};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: ${$white};
    background-color: ${$transparent};
    border: 1px solid ${$white};
  }

  //media query mixins
  ${m.desktop(css`
    font-size: 1.5rem;
  `)}

  //check props for sticky behavior
  ${props => (props.$isSticky ? NavSticky : '')}
`;

const NavSticky = css`
  width: 90%;
  max-width: ${$lgDesktopBreakpoint};
`;

const Button = styled.a`
  color: ${$darkBgColor};
  background-color: ${$white};
  min-width: 9rem;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  display: inline-block;
  border: 1px solid ${$transparent};
  ${m.transition('all 0.3s ease')};

  &.active {
    color: ${$white};
    background-color: ${$darkBgColor};
    padding: 0.25rem 1rem;
    min-width: 7rem;
    font-size: 1.2rem;

    &:hover {
      color: ${$darkBgColor};
      background-color: ${$transparent};
      border: 1px solid ${$darkBgColor};
    }
  }

  //check props for sticky behavior
  ${props => (props.$isSticky ? ButtonSticky : '')}
`;

const ButtonSticky = css`
  background-color: ${$darkBgColor};
  color: ${$white};
  padding: 0.25rem 1rem;
  min-width: 7rem;
  font-size: 1.2rem;

  &:hover {
    color: ${$darkBgColor};
    background-color: ${$transparent};
    border: 1px solid ${$darkBgColor};
  }
`;

const Logo = styled.img`
  width: 4.5rem;
  ${m.transition('opacity 0.3s ease')};
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  //media query mixins
  ${m.desktop(css`
    width: 11.25rem;
  `)}

  //check props for sticky behavior
  ${props => (props.$isSticky ? LogoSticky : '')}
`;

const LogoSticky = css`
  width: 4.5rem;
  filter: brightness(0) saturate(100%);
`;

const Links = styled.ul`
  display: none;
  padding: 1rem 0 2rem 0;
  margin: 0;
  position: relative;
  top: 4.5rem;

  //media query mixins
  ${m.desktop(css`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: static;
    padding: 0;
  `)}

  &.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: ${$white};
    color: ${$primaryContentColor};
    box-shadow: ${$boxShadowBottom};

    //media query mixins
    ${m.desktop(css`
      flex-direction: row;
      position: static;
      width: auto;
      background-color: ${$darkBgColor};
      color: ${$white};
      box-shadow: none;
    `)}
  }

  //check props for sticky behavior
  ${props => (props.$isSticky ? LinksSticky : '')}
`;

const LinksSticky = css`
  //media query mixins
  ${m.desktop(css`
    background-color: ${$white};
    color: ${$primaryContentColor};
  `)}
`;

const Link = styled.a`
  font-size: 1.2rem;
  line-height: 2.5;
  font-weight: 400;
  letter-spacing: 1px;
  @include transition(all 0.3s ease);

  &:hover {
    font-weight: bold;
    letter-spacing: 0;
  }

  &.current {
    font-weight: bold;
  }

  &:after {
    display: block;
    letter-spacing: 1px;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  //media query mixins
  ${m.largeDesktop(css`
    font-size: 1.5rem;
  `)}

  //check props for sticky behavior
  ${props => (props.$isSticky ? LinkSticky : '')}
`;

const LinkSticky = css`
  font-size: 1.2rem;
`;

const Item = styled.li`
  //media query mixins
  ${m.desktop(css`
    display: inline-block;
    margin-left: 6rem;
  `)}
`;

const Hamburger = styled.button`
  display: block;
  cursor: pointer;
  background: none;
  border: none;

  //media query mixins
  ${m.desktop(css`
    display: none;
  `)}

  &.active &__bar:nth-child(2) {
    opacity: 0;
  }
  &.active &__bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &.active &__bar:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
`;

const HamburgerBar = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px auto;
  ${m.transition('opacity 0.3s ease')};
  background-color: ${$white};

  //check props for sticky behavior
  ${props => (props.$isSticky ? HamburgerBarSticky : '')}
`;

const HamburgerBarSticky = css`
  background-color: ${$primaryContentColor};
`;
