import Button from "@mui/material/Button";
import scss from "./Header.module.scss";
import Link from "next/link";


type HeaderProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

function Header({ theme, toggleTheme }: HeaderProps) {
  const getClassName = (baseClassName: string) => {
    return theme === "dark" ? `${baseClassName} ${scss.dark}` : baseClassName;
  };

  return (
    <header className={getClassName(scss.header)}>
      <div className={getClassName(scss.logo)}>
        <Link href="/">ProsperMind Learning</Link>
      </div>
      <nav className={getClassName(scss.navigation)}>
        <ul className={getClassName(scss.menu)}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
        <div className={getClassName(scss.buttonGroup)}>
          <Link href="/login">
            <Button variant="contained">Sign in</Button>
          </Link>
          <Link href="/logout">
            <Button variant="contained">Sign out</Button>
          </Link>
          <Link href="/register">
            <Button variant="contained">Register</Button>
          </Link>
          <svg
            onClick={toggleTheme}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            width="24"
            height="24"
            className={getClassName("")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              stroke={theme === "dark" ? "white" : "#55ACEE"}
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
