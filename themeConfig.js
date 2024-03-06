import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  breakpoints: {
    smMobile: '350px',
    mobile: '578px',
    lgMobile: '767px',
    tablet: '768px',
    desktopMinus: '1023px',
    desktop: '1024px',
    desktopPlus: '1025px',
    mediumDesktop: '1250px',
    lgDesktop: '1440px',
    xlDesktop: '2560px',
  },
  colors: {
    primaryContent: '#292929',
    primaryBg: '#eaeaea',
    darkBg: '#023047',
    lightBg: '#8cd5e8',
    primaryAccent: '#ffcc4c',
    secondaryAccent: '#19aad1',
    error: '#be1313',
    black: '#000000',
    white: '#ffffff',
    transparent: 'transparent',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
    boxShadowBottom: '0 10px 20px -5px rgba(0, 0, 0, 0.15)',
  },
  fonts: {
    copy: 'Assistant',
    heading: 'Open Sans',
    sansSerif: 'sans-serif',
  },
  body: {
    margin: '0',
    padding: '0',
  },
  lists: {
    ul: {
      listStyle: 'none'
    }
  },
  a: { // change the name
    color: 'inherit',
    textDecoration: 'none'
  },
  text: '#363537',
  background: '#023047',
  fontStyle: {
    italic: 'italic',
  },
}

// The darkTheme is a theme that we will have on the future
// for now it's empty
export const darkTheme = {};

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: ${({ theme }) =>`${theme.fonts.copy}, ${theme.fonts.sansSerif}`}; ;
    color: ${({ theme }) => theme.colors.primaryContent};
   }
   
 
   h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => `${theme.fonts.heading}, ${theme.fonts.sansSerif}`}; 
   }
   

   p, li {
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 1.5rem;
    }
   }

   h1 {
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 4.5rem;
      line-height: 5rem;
    }
  }

  h2 {
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 3.5rem;
      line-height: 5rem;
    }
  }

   `;
