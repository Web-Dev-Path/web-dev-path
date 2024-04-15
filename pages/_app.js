import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '@/styles/themeConfig';

function MyApp({ Component, pageProps }) {
  
  // Only uncomment when the darkTheme is set
  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   theme == 'light' ? setTheme('dark') : setTheme(light);
  // };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
