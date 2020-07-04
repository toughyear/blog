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

        {/* Primary Meta Tags  */}
        <meta
          name="description"
          content="I blog about React, NextJS, TailwindCSS, GraphQL, Firebase, and everything related to web-development or indie hacking and also share about the projects I am working on."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajeevnaruka.com/" />
        <meta
          property="og:title"
          content="Rajeev Singh Naruka - I build things for the web"
        />
        <meta
          property="og:description"
          content="I blog about React, NextJS, TailwindCSS, GraphQL, Firebase, and everything related to web-development or indie hacking and also share about the projects I am working on."
        />
        <meta
          property="og:image"
          content="https://rajeevnaruka.com/og/mysite-homepage.png"
        />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rajeevnaruka.com/" />
        <meta
          property="twitter:title"
          content="Rajeev Singh Naruka - I build things for the web"
        />
        <meta
          property="twitter:description"
          content="I blog about React, NextJS, TailwindCSS, GraphQL, Firebase, and everything related to web-development or indie hacking and also share about the projects I am working on."
        />
        <meta
          property="twitter:image"
          content="https://rajeevnaruka.com/og/mysite-homepage.png"
        />

        <meta property="og:site_name" content="Rajeev Singh Naruka" />
        <meta name="twitter:site" content="@RajeevSinghN" />

        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>

        <title>
          {title || `Rajeev Singh Naruka - I build things for the web`}
        </title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
