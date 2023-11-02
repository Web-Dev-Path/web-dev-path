import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: {
    color: '#292929',
    fontFamily: 'Assistant, sans-serif',
    margin: '0',
    padding: '0',
  },
  headers: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '3rem',
      lineHeight: '3.5rem',
      fontSizeDesktop: '4.5rem',
      lineHeightDesktop: '5rem',
    },
    h2: {
      fontSize: '3rem',
      lineHeight: '3.5rem',
      fontSizeDesktop: '3.5rem',
      lineHeightDesktop: '5rem',
    },
    h3: {
      fontSize: '1.5rem',
      lineHeight: '1.938rem',
    },
  },
  lists: {},
  text: '#363537',
  background: '#023047',
  color: '#FFF',
  display: 'flex',
  fontStyle: {
    italic: 'italic',
  },
  hero: {
    headerSpanColor: '#ffcc4c',
  },
};

// The darkTheme is a theme that we will have on the future
// for now it's empty
export const darkTheme = {};

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: ${props => props.theme.body.fontFamily};
    color: ${props => props.theme.body.color};
    margin: ${props => props.theme.body.margin};    
    padding: ${props => props.theme.body.padding};
   }

   h1, 
   h2, 
   h3, 
   h4, 
   h5, 
   h6 {
    font-family: ${props => props.theme.headers.fontFamily}; 
   }

   h1 {
    font-size: ${props => props.theme.headers.h1.fontSize};
    line-height: ${props => props.theme.headers.h1.lineHeight};
    @media (min-width: 1024px) {
      font-size: ${props => props.theme.headers.h1.fontSizeDesktop};
      line-height: ${props => props.theme.headers.h1.lineHeightDesktop};
    }
   }

   h2 {
    font-size: ${props => props.theme.headers.h2.fontSize};
    line-height: ${props => props.theme.headers.h2.lineHeight};
    @media (min-width: 1024px) {
      font-size: ${props => props.theme.headers.h2.fontSizeDesktop};
      line-height: ${props => props.theme.headers.h2.lineHeightDesktop};
    }
   }

   h3 {
    font-size: ${props => props.theme.headers.h3.fontSize};
    line-height: ${props => props.theme.headers.h3.lineHeight};
   }
`;
