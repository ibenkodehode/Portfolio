// styles
// import { HashLink } from "react-router-dom";
import styles from "./Navbar.modules.css";

const Navbar = () => {
  return (
    <header id="top-page" className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <a href="#prosjekter">PROSJEKTER</a>
          </li>
          <li>
            <a href="#om">OM</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
