// icons
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

// styles
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.line} />
      <div className={styles.wrap}>
        <p lassName={styles.p}>© 2023 Iben Kodehode</p>
        <div>
          <a
            href="https://www.linkedin.com/in/iben-tolleshaug-151831261/"
            className={styles.icon}
            target="_blank">
            <SiLinkedin color="white" />
          </a>
          <a
            href="https://github.com/ibenkodehode"
            className={styles.icon}
            target="_blank">
            <SiGithub color="white" />
          </a>
          <a
            href="https://app.netlify.com/teams/ibenkodehode/overview"
            className={styles.icon}
            target="_blank">
            <SiNetlify color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
