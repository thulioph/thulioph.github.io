import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/Header.module.css";

export const routes = [
  { label: "About", value: "/about", description: "A little bit about me" },
  {
    label: "Projects",
    value: "/projects",
    description: "Open-source experiments",
  },
  { label: "Talks", value: "/talks", description: "Sharing knowledge" },
  { label: "Blog", value: "/blog", description: "Tech articles" },
];

export const mainRoutes = [routes[0], routes[1], routes[2]];
const navbarRoutes = [...mainRoutes];

const AppNav = () => {
  const router = useRouter();

  return (
    <header className={styles.globalHeader}>
      <div className="box logo">
        <Link href="/" passHref={true}>
          <a className>
            <h1>Thulio Philipe</h1>
          </a>
        </Link>
      </div>

      <div className="box">
        <ul className="listBtn">
          {navbarRoutes.map(({ label, value }) => (
            <li key={label}>
              <Link href={value} title={label}>
                <a
                  className={
                    router.pathname == value ? "linkBtn active" : "linkBtn"
                  }
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AppNav;
