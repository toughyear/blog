import Head from "next/head";
import "../styles/tailwind.css";
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
        <meta property="og:title" content={title || `Rajeev Singh Naruka`} />
        <meta property="og:site_name" content="Rajeev Singh Naruka" />
        <meta
          property="og:description"
          content={og ? og.description : `My blog: Growth, dev and startups`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RajeevSinghN" />
        <meta
          property="og:image"
          content={og ? og.image : `https://rajeevnaruka.com/og/uses.png`}
        />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>

        <title>{title || `Rajeev Singh Naruka`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
