//Styles
import styles from "../styles/CodeIcons.module.css";

// Icons
import { SiGithub } from "react-icons/si"; //github
import { DiGit } from "react-icons/di"; //git
import { SiJavascript } from "react-icons/si"; //js
import { SiReact } from "react-icons/si"; //react
import { SiVisualstudiocode } from "react-icons/si"; //vs code
import { SiCss3 } from "react-icons/si"; //css
import { SiFigma } from "react-icons/si"; //figma
import { SiHtml5 } from "react-icons/si"; //html5
import { SiVite } from "react-icons/si"; //vite
import { SiTailwindcss } from "react-icons/si"; //tailwind
import { DiNpm } from "react-icons/di"; //npm

const Icons = () => {
  return (
    <aside>
      <div className={styles.container}>
        <h2 className={styles.headline}>VERKTØY</h2>
        <div className={styles.flex}>
          <SiGithub className={styles.icon} />
          <SiJavascript className={styles.icon} />
          <SiCss3 className={styles.icon} />
          <SiFigma className={styles.icon} />
          <SiHtml5 className={styles.icon} />
          <SiVite className={styles.icon} />
          <SiVisualstudiocode className={styles.icon} />
          <SiReact className={styles.icon} />
        </div>
      </div>
      <div className={styles.container}>
        <h3 className={styles.headlines}>UTFORSKER</h3>
        <div className={styles.flex}>
          <DiGit className={styles.icons} />
          <SiTailwindcss className={styles.icons} />
          <DiNpm className={styles.icons} />
        </div>
      </div>
    </aside>
  );
};

export default Icons;
