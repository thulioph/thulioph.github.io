import React from "react";
import Head from "next/head";

import * as data from "@/services/personal-info";

const AppHeader = ({ children }) => {
  const defaultTitle = data.personalInfo.name;

  const customTitle = `${children} // ${defaultTitle}`;

  return (
    <React.Fragment>
      <Head>
        <title>{customTitle}</title>
        <meta name="description" content={customTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </React.Fragment>
  );
};

export default AppHeader;
