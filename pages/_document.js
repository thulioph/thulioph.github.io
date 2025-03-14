import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;700&display=swap"
          rel="stylesheet"
        />

        <meta property="og:site_name" content="Thulio Philipe" />
        <meta name="twitter:site" content="@thulioph_" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
