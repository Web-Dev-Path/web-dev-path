import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import App from 'next/app';

export default class MyDocument extends Document {
  static getInitalProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      App => props => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Open+Sans:wght@700&display=swap'
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
