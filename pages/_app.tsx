import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/*<!-- HTML Meta Tags -->*/}
        <title>Sv's Portfolio</title>
        <meta
          name="description"
          content="Automating Non-Creative Jobs w/ webtools"
        />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="og:url" content="https://www.maheshthedev.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sv's Portfolio" />
        <meta
          property="og:description"
          content="Automating Non-Creative Jobs w/ webtools"
        />
        <meta
          property="og:image"
          content="https://www.maheshthedev.me/images/OG-Image.png"
        />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="maheshthedev.me" />
        <meta property="twitter:url" content="https://www.maheshthedev.me/" />
        <meta name="twitter:title" content="Sv's Portfolio" />
        <meta
          name="twitter:description"
          content="Automating Non-Creative Jobs w/ webtools"
        />
        <meta
          name="twitter:image"
          content="https://www.maheshthedev.me/images/OG-Image.png"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
