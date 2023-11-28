import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='description' content='Level up your tech career.' />
          <meta name='keywords' content='Web Dev Path' />
          <meta property='og:title' content='Web Dev Path' />
          <meta
            property='og:description'
            content='Level up your tech career.'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.webdevpath.co' />
          <meta
            property='og:image'
            content='https://www.webdevpath.co/images/logo.png'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content='Web Dev Path' />
          <meta
            name='twitter:description'
            content='Level up your tech career.'
          />
          <meta
            name='twitter:image'
            content='https://www.webdevpath.co/images/logo.png'
          />
          <meta name='twitter:image:alt' content='Web Dev Path' />
          <meta name='twitter:site' content='@WebDevPath' />
          <meta name='robots' content='index, follow' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Open+Sans:wght@700&display=swap'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
