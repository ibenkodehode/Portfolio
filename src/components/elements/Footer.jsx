// icons
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

// styles
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <hr className={styles.hr} />
      <div className={styles.container}>
        <p lassName={styles.p}>© 2023 Iben Kodehode</p>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/iben-tolleshaug-151831261/"
            className={styles.icon}
            target="_blank">
            <SiLinkedin className={styles.linkedin} />
          </a>
          <a
            href="https://github.com/ibenkodehode"
            className={styles.icon}
            target="_blank">
            <SiGithub className={styles.github} />
          </a>
          <a
            href="https://app.netlify.com/teams/ibenkodehode/overview"
            className={styles.icon}
            target="_blank">
            <SiNetlify className={styles.netlify} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
