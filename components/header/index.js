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
      </Head>
    </React.Fragment>
  );
};

export default AppHeader;
