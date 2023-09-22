import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#023047',
  color: '#FFF',
  display: 'flex',
  opacity: '0.6',
  transition: {
    opacity: 'opacity 0.3s ease',
    all: 'all 0.3s ease',
  },
  fontStyle: {
    italic: 'italic',
  },
  // fontSize: {
  //   tiny: '1rem',
  //   small: '1.5rem',
  // },
  // textAlign: {
  //   center: 'center',
  //   left: 'left',
  //   end: 'end',
  // },
  // cursor: 'pointer',

  // justifyContent: {
  //   spaceBetween: 'space-between',
  //   center: 'center',
  //   end: 'end',
  // },
  // alignItems: {
  //   center: 'center',
  // },

  // maxWidth: {
  //   maxContent: 'max-content',
  //   maxWidthFull: '100%',
  // },
  // minWidth: {
  //   medium: '6.5rem',
  // },
  // flexDirection: {
  //   column: 'column',
  // },

  // order: {
  //   two: '2',
  // },
  // margin: '0',
  // margin: {
  //   zero: '0',
  //   revert: 'revert',
  // },
  // padding: {
    //   zero: '0',
    // },
    // paddingTop: {
    //   medium: '2.5rem',
    // },
    // paddingLeft: {
    //   medium: '28px',
    //   big: '50px',
    // },
    // paddingBottom: {
    //   medium: '2.5rem',
    // },

};
export const GlobalStyles = createGlobalStyle`
  // body {
  //   background-color: ${props => props.theme.body};
  //   color: ${props => props.theme.text};
  //   font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  //   transition: all 0.50s linear;
  // }

`;
