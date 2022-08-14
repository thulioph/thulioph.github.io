import React from "react";

import styles from "@/styles/Home.module.css";

const AppFooter = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <p>© </p>
        <a
          href="https://web.archive.org/web/20130328062741/http://about.me/thulioph"
          target="_blank"
          className="help-cursor"
        >
          2012
        </a>
        <p>
          – {new Date().getFullYear()} / Copyright Thulio Philipe. All rights
          reserved.
        </p>
      </footer>
    </React.Fragment>
  );
};

export default AppFooter;
