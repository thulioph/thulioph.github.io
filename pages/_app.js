import React from "react";
import Link from "next/link";
import Router from "next/router";
import Script from "next/script";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import "../styles/globals.css";

import AppNav from "@/components/navbar";
import AppFooter from "@/components/footer";

const routes = [
  { label: "About", value: "/about", description: "A little bit about me" },
  {
    label: "Projects",
    value: "/projects",
    description: "Open-source experiments",
  },
  { label: "Talks", value: "/talks", description: "Sharing knowledge" },
  { label: "Blog", value: "/blog", description: "Tech articles" },
];

const mainRoutes = [routes[0], routes[3]];

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
      <header className="global-header">
        <AppNav routes={mainRoutes} />
      </header>

      <Component {...pageProps} />

      <section>
        <ul>
          {routes.map(({ label, value, description }) => (
            <li key={label}>
              <Link href={value}>
                <a>
                  {label} {"  "} <span>({description})</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <AppFooter />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EF22391293" />

      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EF22391293');`}
      </Script>
    </React.Fragment>
  );
}

export default MyApp;
