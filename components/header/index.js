import React from "react";
import Head from "next/head";

const AppHeader = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{children} | Thulio Philipe, Senior Software Engineer</title>
        <meta
          name="description"
          content={`${children} | Thulio Philipe, Senior Software Engineer`}
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Web Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
    </React.Fragment>
  );
};

export default AppHeader;
