import Link from "next/link";

import AppHeader from "@/components/header";
import styles from "@/styles/Home.module.css";
import { getAbout } from "@/services/index";
import { mainRoutes } from "@/components/navbar";
import Player from "@/components/player";

export default function Home({ about }) {
  const { name, nickname } = about.personalInfo;
  const { currentCompany, bio } = about.professionalInfo;

  return (
    <div className={`${styles.container} page`}>
      <AppHeader>Home</AppHeader>

      <main className={styles.main}>
        <section className={styles.introduction}>
          <h1 className={styles.mainTitle}>
            Hi! I&#39;m <span>{name}</span>, <span>a.k.a</span>{" "}
            <span>{nickname}</span>.
          </h1>
        </section>

        <section className={styles.moreInfo}>
          <aside className={styles.box}>
            <p className={styles.paragraph}>
              <Player />, while working at{" "}
              <a
                className={styles.link}
                href={currentCompany.website}
                target="_blank"
                rel="noreferrer"
              >
                {currentCompany.label}
              </a>
              .
            </p>
          </aside>

          <aside className={styles.box}>
            <p className={`${styles.paragraph} summary`}>
              <Link href="/about">
                <a className={styles.link}>
                  {bio.summary.split(".")[3]}
                  {"."}
                </a>
              </Link>
            </p>
          </aside>

          <aside className={styles.box}>
            <ul className={styles.listBtn}>
              {mainRoutes.map(({ label, value, description }) => (
                <li key={label}>
                  <Link href={value}>
                    <a className={styles.linkBtn} data-title={description}>
                      {label} {"  "}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const about = await getAbout();

  return {
    props: {
      about,
    },
  };
}
