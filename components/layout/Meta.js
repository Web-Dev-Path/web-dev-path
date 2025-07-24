import Head from 'next/head';
import pageMeta from '@/utils/meta';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function Meta() {
  const currentPath = usePathname();
  const firstSegment = '/' + currentPath.split('/')[1] || [];
  const meta =
    firstSegment in pageMeta ? pageMeta[firstSegment] : pageMeta['/'];
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content={meta.keywords} />
        <meta name='description' content={meta.description} />
        <meta charSet='utf-8' />
        <title>{meta.title}</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#023047'
        />
        <meta name='msapplication-TileColor' content='#023047' />
        <meta name='theme-color' content='#ffffff' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:site_name' content='Web Dev Path' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/favicon/og-image.png' />
        <meta property='twitter:image' content='/favicon/og-image.png' />
        <meta property='og:url' content='/' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='1200' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href={meta.canonical} />
      </Head>
      {/* Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script strategy='afterInteractive' id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
