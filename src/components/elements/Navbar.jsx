// styles
import styles from "../styles/Navbar.module.css";

// logo
import logo from "../../img/ilt.svg";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img
          src={logo}
          alt="logo containing the letters I and T in angel brackets "
          className={styles.logo}
        />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.link} href="#om">
              OM MEG
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.link} href="#prosjekter">
              PROSJEKTER
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
