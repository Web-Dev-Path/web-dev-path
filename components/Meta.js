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
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#023047" />
      <meta name="msapplication-TileColor" content="#023047" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content="Web Dev Path" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/favicon/og-image.png" />
      <meta property="twitter:image" content="/favicon/og-image.png" /> 
      <meta property="og:url" content="/" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
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
