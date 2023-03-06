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
import { SiNpm } from "react-icons/si"; //npm

const Icons = () => {
  return (
    <aside>
      <div className={styles.container}>
        <h3 className={styles.headline}>SPRÅK</h3>
        <div className={styles.flex}>
          <SiHtml5 className={styles.icon} title="HTML" />
          <SiCss3 className={styles.icon} title="CSS" />
          <SiJavascript className={styles.icon} title="JavaScript" />
          <SiReact className={styles.icon} title="React" />
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.headline}>VERKTØY</h2>
        <div className={styles.flex}>
          <SiGithub className={styles.icon} title="Github" />
          <SiNpm className={styles.icon} />
          <SiFigma className={styles.icon} title="Figma" />
          <SiVite className={styles.icon} title="VITE" />
          <SiVisualstudiocode
            className={styles.icon}
            title="Visualstudiocode"
          />
        </div>
      </div>
      <div className={styles.container}>
        <h3 className={styles.headline}>UTFORSKER</h3>
        <div className={styles.flex}>
          <DiGit className={styles.icons} title="Git" />
          <SiTailwindcss className={styles.icons} title="Tailwind" />
        </div>
      </div>
    </aside>
  );
};

export default Icons;
