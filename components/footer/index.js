import React from "react";

import styles from "@/styles/Home.module.css";

const data = [
  {
    menu: "email",
    link: "https://mailto:thulioph@gmail.com",
  },
  {
    menu: "twitter",
    link: "https://twitter.com/@thulioph_",
  },
  {
    menu: "github",
    link: "https://github.com/thulioph",
  },
  {
    menu: "linkedin",
    link: "https://linkedin.com/in/thulioph/",
  },
  {
    menu: "instagram",
    link: "https://instagram.com/thulioph",
  },
];

const AppFooter = () => {
  return (
    <React.Fragment>
      <footer className={styles.footer}>
        <section className="footer-sections">
          <ul className="footer-links">
            {data.map((el) => (
              <li key={el.menu}>
                <a
                  href={el.link}
                  title={el.menu}
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.menu}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default AppFooter;
