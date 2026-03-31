import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/Header.module.css";
import routes from "@/components/navbar/routes";

const AppNav = () => {
  const router = useRouter();

  return (
    <header className={styles.globalHeader}>
      <div className="box logo">
        <Link href="/">
          <h1>TP</h1>
        </Link>
      </div>

      <div className="box">
        <ul className="listBtn">
          {routes.map(({ label, value }) => (
            <li key={label}>
              <Link
                href={value}
                title={label}
                className={
                  router.pathname.includes(value) ? "linkBtn active" : "linkBtn"
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AppNav;
