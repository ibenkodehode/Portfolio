//Styles
import styles from "../styles/CodeIcons.module.css";

// Icons
import { DiGithubBadge } from "react-icons/di"; //github
import { DiGit } from "react-icons/di"; //git
import { DiJavascript1 } from "react-icons/di"; //js
import { DiReact } from "react-icons/di"; //react
import { DiVisualstudio } from "react-icons/di"; //vs code
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
        <h2 className={styles.headline}>Verktøy jeg bruker daglig </h2>
        <div className={styles.flex}>
          <DiGithubBadge className={styles.icon} />
          <DiJavascript1 className={styles.icon} />
          <SiCss3 className={styles.icon} />
          <SiFigma className={styles.icon} />
          <SiHtml5 className={styles.icon} />
          <SiVite className={styles.icon} />
          <DiVisualstudio className={styles.icon} />
          <DiReact className={styles.icon} />
        </div>
      </div>
      <div className={styles.container}>
        <h3 className={styles.headlines}>Verktøy jeg er kjent med</h3>
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
