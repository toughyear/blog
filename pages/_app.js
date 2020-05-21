import Head from "next/head";

import "../styles/base.css";

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og;
  const title = pageProps.data?.title;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta property="og:title" content={title || `Rajeev, code & design`} />
        <meta property="og:site_name" content="Rajeev, code & design" />
        <meta
          property="og:description"
          content={
            og
              ? og.description
              : `My blog: Code, Design and poorly executed jokes`
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RajeevSinghN" />
        <meta
          property="og:image"
          content={og ? og.image : `https://telmo.im/og/default.png`}
        />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>

        <title>{title || `Rajeev, code & design`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
