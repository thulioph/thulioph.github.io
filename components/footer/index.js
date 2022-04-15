import React from "react";

const AppFooter = () => {
  return (
    <React.Fragment>
      <footer>
        ©{" "}
        <a
          href="https://web.archive.org/web/20130328062741/http://about.me/thulioph"
          target="_blank"
          className="help-cursor"
        >
          2012
        </a>
        – {new Date().getFullYear()} / Copyright Thulio Philipe. All rights
        reserved.
      </footer>
    </React.Fragment>
  );
};

export default AppFooter;
