import Link from "next/link";
import { useRouter } from "next/router";

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

export const mainRoutes = [routes[0], routes[1]];
const navbarRoutes = [...mainRoutes];

const AppNav = () => {
  const router = useRouter();

  return (
    <header className="global-header">
      <div className="box logo">
        <Link href="/">
          <a className>
            <h1>Thulio Philipe</h1>
          </a>
        </Link>
      </div>

      <div className="box">
        <ul>
          {navbarRoutes.map(({ label, value }) => (
            <li
              key={label}
              className={router.pathname == value ? "active" : ""}
            >
              <Link href={value} title={label}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AppNav;
