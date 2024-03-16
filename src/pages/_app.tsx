import { GA_TRACKING_ID } from '@/libs/gtag';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {/*  <!-- 페이스북 --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}avifs/portfolio-logo.avif`}
        />
        <meta property='og:title' content="Nam Minseop's Portfolio" />
        <meta property='og:description' content='남민섭의 포트폴리오입니다' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_BASE_URL} />
        {/*<!-- 트위터 --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}avifs/portfolio-logo.avif`}
        />
        <meta name='twitter:title' content="Nam Minseop's Portfolio" />
        <meta name='twitter:description' content='남민섭의 포트폴리오입니다' />
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        strategy='afterInteractive'
        id='google-analytics-script'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('ts', new Date());
              gtag('config', '${GA_TRACKING_ID}', { 
                page_path: window.location.pathname,
              });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
