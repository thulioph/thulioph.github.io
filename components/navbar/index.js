import Link from "next/link";
import { useRouter } from "next/router";

const AppNav = ({ routes }) => {
  const router = useRouter();

  return (
    <ul>
      {routes.map(({ label, value }) => (
        <li key={label} className={router.pathname == value ? "active" : ""}>
          <Link href={value} title={label}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AppNav;
