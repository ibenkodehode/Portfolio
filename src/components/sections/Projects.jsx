// components
import Project from "../elements/Project";

// styles
import styles from "../styles/Projects.module.css";

//images
import soundboard from "../../img/soundboard.png";
import generatePassword from "../../img/passwordgenerator.png";
import basket from "../../img/basket.png";
import weather from "../../img/weather.png";

//icons
import { DiJavascript1 } from "react-icons/di"; //js
import { DiReact } from "react-icons/di"; //react
import { SiCss3 } from "react-icons/si"; //css
import { SiVite } from "react-icons/si"; //vite
import { SiTailwindcss } from "react-icons/si"; //tailwind

const Projects = () => {
  return (
    <section className={styles.section} id="prosjekter">
      <h3 className={styles.header}>Prosjekter</h3>
      <div className={styles.flex}>
        <Project
          src={soundboard}
          alt="Screenshot of a project displaying a pink soundboard"
          title="Soundboard"
          link="https://github.com/ibenkodehode/password-generator"
          icon={
            <>
              <DiJavascript1 /> <DiReact /> <SiCss3 />
            </>
          }
          hoverColor="#e7c3d870"
        />
        <Project
          src={generatePassword}
          alt="Screenshot showing a webpage generating a random password"
          title="Generate random password"
          link="https://github.com/ibenkodehode/password-generator"
          icon={
            <>
              <DiJavascript1 /> <DiReact /> <SiCss3 />
            </>
          }
          hoverColor="#54ab9280"
        />
        <Project
          src={basket}
          alt="Screenshot showing a webpage counting basket points"
          title="Basketball score"
          link="https://github.com/ibenkodehode/basketball-score"
          icon={
            <>
              <DiJavascript1 /> <DiReact /> <SiCss3 />
            </>
          }
          hoverColor="#C8443380"
        />
        <Project
          src={weather}
          alt="Screenshot showing a weather app"
          title="Weather"
          link="github.com/ibenkodehode/weather-app"
          icon={
            <>
              <DiJavascript1 /> <DiReact /> <SiCss3 /> <SiTailwindcss />
            </>
          }
          hoverColor="#1BB5EA80"
        />
      </div>
    </section>
  );
};

export default Projects;
