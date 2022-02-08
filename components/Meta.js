import Head from 'next/head';
import { meta } from '../utils/meta';

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={meta.keywords} />
      <meta name="description" content={meta.description} />
      <meta charSet="utf-8" />
      <title>{meta.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Open+Sans:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
