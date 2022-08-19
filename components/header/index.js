import React from "react";
import Head from "next/head";

const AppHeader = ({ children }) => {
  const defaultTitle = "Thulio Philipe, Senior Software Engineer";

  return (
    <React.Fragment>
      <Head>
        <title>
          {children} | {defaultTitle}
        </title>
        <meta name="description" content={`${children} | ${defaultTitle}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </React.Fragment>
  );
};

export default AppHeader;
