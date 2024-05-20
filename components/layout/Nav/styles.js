import styled, { css } from 'styled-components';
import { transition } from '@/styles/themeConfig';

const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.transparent};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  height: 4.5rem;
  z-index: 100;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      height: auto;
    }
  `}
`;

const NavWrapper = styled.div`
  //check props for sticky behavior
  ${props => (props.$isSticky ? NavWrapperSticky : '')}
`;

const NavWrapperSticky = css`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 4.5rem;
  box-shadow: ${({ theme }) => theme.colors.$boxShadow};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  //check props for sticky behavior
  ${props => (props.$isSticky ? NavSticky : '')}
`;

const NavSticky = css`
  width: 90%;
  max-width: ${({ theme }) => theme.breakpoints.lgDesktop};
`;

const Button = styled.a`
  color: ${({ theme }) => theme.colors.darkBg};
  background-color: ${({ theme }) => theme.colors.white};
  min-width: 9rem;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.transparent};
  ${transition('all 0.3s ease')};

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      font-size: 1.5rem;
      ${props => (props.$isSticky ? 'font-size: 1.2rem;' : '')}
    }
  `}

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkBg};
    padding: 0.25rem 1rem;
    min-width: 7rem;
    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.darkBg};
      background-color: ${({ theme }) => theme.colors.transparent};
      border: 1px solid ${({ theme }) => theme.colors.darkBg};
    }
  }

  //check props for sticky behavior
  ${props => (props.$isSticky ? ButtonSticky : '')}
`;

const ButtonSticky = css`
  background-color: ${({ theme }) => theme.colors.darkBg};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.25rem 1rem;
  min-width: 7rem;
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.darkBg};
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.darkBg};
  }
`;

const Logo = styled.img`
  width: 4.5rem;
  ${transition('all 0.3s ease')};
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      width: 11.25rem;
    }
  `}

  //check props for sticky behavior
  ${props => (props.$isSticky ? LogoSticky : '')}
`;

const LogoSticky = css`
  width: 4.5rem !important;
  filter: brightness(0) saturate(100%);
`;

const Links = styled.ul`
  display: none;
  padding: 1rem 0 2rem 0;
  margin: 0;
  position: relative;
  top: 4.5rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: static;
      padding: 0;
    }
  `}

  &.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primaryContent};
    box-shadow: ${({ theme }) => theme.colors.boxShadowBottom};

    ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      flex-direction: row;
      position: static;
      width: auto;
      background-color: ${({ theme }) => theme.colors.darkBg};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: none;
    }
  `}
  }

  //check props for sticky behavior
  ${props => (props.$isSticky ? LinksSticky : '')}
`;

const LinksSticky = css`
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primaryContent};
    }
  `}
`;

const Link = styled.a`
  font-size: 1.2rem;
  line-height: 2.5;
  font-weight: 400;
  letter-spacing: 1px;
  ${transition('all 0.3s ease')};

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

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.lgDesktop}) {
      font-size: 1.5rem;
    }
  `}
`;

const Item = styled.li`
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.desktop}) {
      display: inline-block;
      margin-left: 6rem;
    }
  `}
`;

const Hamburger = styled.button`
  display: block;
  cursor: pointer;
  background: none;
  border: none;

  ${props => css`
      @media (min-width: ${props.theme.breakpoints.desktop}) {
        display: none;
      }
    `}

  &.active span:nth-child(2) {
    opacity: 0;
  }
  &.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  &.active span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
`;

const HamburgerBar = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px auto;
  ${transition('all 0.3s ease')};
  background-color: ${({ theme }) => theme.colors.white};

  //check props for sticky behavior
  ${props => (props.$isSticky ? HamburgerBarSticky : '')}
`;

const HamburgerBarSticky = css`
  background-color: ${({ theme }) => theme.colors.primaryContent};
`;

export default {
  Header,
  NavWrapper,
  Nav,
  Logo,
  Links,
  Item,
  Link,
  Button,
  Hamburger,
  HamburgerBar,
};
