import Link from "next/link";
import classes from "./main-nav.module.css";
import Logo from './logo';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/" passHref>
        
          <Logo />
        
      </Link>
      <nav>
        <ul>
          <li><Link href="/post">Posts</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
