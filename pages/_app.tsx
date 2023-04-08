import '@/styles/globals.css';
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { HamburgerMenu } from '@/components/molecules/HamburgerMenu/HamburgerMenu';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta data-hid="og:locale" property="og:locale" content="ja_JP" />
        <meta data-hid="og:type" property="og:type" content="website" />
        <meta
          data-hid="og:site_name"
          property="og:site_name"
          content="Template"
        />
        <title>My Template Next.js App</title>
      </Head>
      <div>
        <HamburgerMenu />
        <Component {...pageProps} />
      </div>
    </>
  );
}
