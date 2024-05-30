import { createGlobalStyle, css } from 'styled-components';

export const transition = $args => css`
  -webkit-transition: ${$args};
  -moz-transition: ${$args};
  -ms-transition: ${$args};
  -o-transition: ${$args};
  transition: ${$args};
`;

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
    blue: '#0000ee',
    white: '#ffffff',
    grey: '#d9d9d9',
    darkGrey: '#9ba39d',
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
      listStyle: 'none',
    },
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  text: '#363537',
  background: '#023047',
  fontStyle: {
    italic: 'italic',
  },
};

// The darkTheme is a theme that we will have on the future
// for now it's empty
export const darkTheme = {
  //  ...lightTheme, // this copies all properties from lightTheme into darkTheme
  // Override specific properties for the dark theme below
  //colors: {
  //...lightTheme.colors,
  // Override specific color properties for the dark theme
  // For example, change primaryBg to a darker color
  //primaryBg: '#someDarkColor',
  // Add any other color overrides here
  //},
  // You can also override other properties in a similar manner
};

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: ${({ theme }) =>
      `${theme.fonts.copy}, ${theme.fonts.sansSerif}`};
    color: ${({ theme }) => theme.colors.primaryContent};
    padding: 0;
    margin: 0;
   }   
 
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) =>
      `${theme.fonts.heading}, ${theme.fonts.sansSerif}`}; 
   }
   
  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
  }   

  p,
  li {
    font-size: 1.25rem;
    line-height: 1.938rem;
  }

  

  h2 {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.938rem;
  }

  ul {
    list-style: none;
  }

  a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
    }
  } 

  * {
    box-sizing: border-box;
  }

  .not-found,
  .contact-us,
  .post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    margin: 10% auto;
    align-items: center;
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
