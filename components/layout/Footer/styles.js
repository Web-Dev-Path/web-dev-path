import styled, { css } from 'styled-components';
import Container from '@/components/containers/Container';
import * as m from '@/styles/_mixins';
// import { $white, $darkBgColor } from '@/styles/_variables';

const Footer = styled.footer`
  
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Inner = styled(Container)`
  padding-top: 2.5rem;
  text-align: center;

  //media query mixins
  ${m.tablet(css`
    display: ${({ theme }) => theme.display};
    justify-content: space-between;
    align-items: center;
    text-align: left;
  `)}
`;

const Logo = styled.a`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  //media query mixins
  ${m.tablet(css`
    margin: 0;
    max-width: max-content;
  `)}
`;

const NavSocialsContainer = styled.div`
  display: ${({ theme }) => theme.display};
  flex-direction: column;
`;

const Nav = styled.nav`
  //media query mixins
  ${m.tablet(css`
    min-width: 6.5rem;
    order: 2;
  `)}

  ${m.largeDesktop(css`
    font-size: 1.5rem;
  `)}
`;

const NavList = styled.ul`
  padding: 0;

  //media query mixins
  ${m.tablet(css`
    display: ${({ theme }) => theme.display};
  `)}
`;

const NavItem = styled.li`
  margin: 0.5rem 0;

  //media query mixins
  ${m.tablet(css`
    padding-left: 50px;
  `)}
`;

const SocialIconsContainer = styled.div``;

const SocialList = styled.ul`
  display: ${({ theme }) => theme.display};
  justify-content: center;
  margin: revert;
  padding: 0;

  //media query mixins
  ${m.tablet(css`
    justify-content: end;
  `)}
`;

const SocialItem = styled.li`
  cursor: pointer;
  ${m.transition('all 0.3s ease')};  

  &:hover {
    opacity: 0.6;
  }

  //media query mixins
  ${m.tablet(css`
    padding-left: 28px;
    max-width: 100%;
  `)}
`;

const Copyright = styled.p`
  text-align: center;
  margin: 0;
  font-size: 1rem;
  padding-bottom: 2.5rem;

  //media query mixins
  ${m.tablet(css`
    text-align: end;
  `)}
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
  Copyright,
};
