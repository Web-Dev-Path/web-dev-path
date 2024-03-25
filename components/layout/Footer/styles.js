import styled, { css } from 'styled-components';
import Container from '@/components/containers/Container';
import * as m from '@/styles/_mixins';

const Footer = styled.footer`
  
  background-color: ${({ theme }) => theme.colors.darkBg};
  color: ${({ theme }) => theme.colors.white};
`;

const Inner = styled(Container)`
  padding-top: 2.5rem;
  text-align: center;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  `}
`;

const Logo = styled.a`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      margin: 0;
      max-width: max-content;
    }
  `}
`;

const NavSocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      min-width: 6.5rem;
      order: 2;
    }

    @media (min-width: ${props.theme.breakpoints.lgDesktop}) {
      font-size: 1.5rem;
    }
  `}
`;

const NavList = styled.ul`
  padding: 0;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      display: flex;
    }
  `}
`;

const NavItem = styled.li`
  margin: 0.5rem 0;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      padding-left: 3.125rem;
    }
  `}
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  margin: revert;
  padding: 0;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      justify-content: end;
    }
  `}
`;

const SocialItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease;  

  &:hover {
    opacity: 0.6;
  }

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      padding-left: 1.75rem;
      max-width: 100%;
    }
  `}
`;

const BottomText = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      align-items: flex-end;
    }
  `}
`;

const Copyright = styled.p`
  text-align: center;
  margin: 0;
  font-size: 1rem;
  padding-bottom: 1rem;

  ${props => css`
    @media (min-width: ${props.theme.breakpoints.tablet}) {
      text-align: end;
    }
  `}
`;

const Netlify = styled(Copyright)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;



export default {
  Footer,
  Inner,
  Logo,
  NavSocialsContainer,
  Nav,
  NavList,
  NavItem,
  SocialList,
  SocialItem,
  BottomText,
  Copyright,
  Netlify,
};
