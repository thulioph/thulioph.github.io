import React from "react";
import Router from "next/router";
import Script from "next/script";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import "../styles/globals.css";

import AppFooter from "@/components/footer";

import styles from "@/styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <React.Fragment>
      <Component {...pageProps} />

      <AppFooter />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EF22391293" />

      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EF22391293');`}
      </Script>
    </React.Fragment>
  );
}

export default MyApp;
