// components
import Project from "../elements/Project";

// styles
import styles from "../styles/Projects.module.css";

//images
import soundboard from "../../img/soundboard.png";
import generatePassword from "../../img/passwordgenerator.png";
import basket from "../../img/basket.png";
import weather from "../../img/weather.png";
import pet from "../../img/pet.png";
import horizon from "../../img/horizon.png";
import dragon from "../../img/dragon.png";

//icons
import { DiJavascript1 } from "react-icons/di"; //js
import { DiReact } from "react-icons/di"; //react
import { SiCss3 } from "react-icons/si"; //css
import { SiVite } from "react-icons/si"; //vite
import { SiTailwindcss } from "react-icons/si"; //tailwind
import { SiHtml5 } from "react-icons/si"; //html5
import { TbApi } from "react-icons/tb"; //html5

const Projects = () => {
  return (
    <section id="prosjekter">
      <h3 className={styles.header}>Prosjekter</h3>
      <div className={styles.flex}>
        <Project
          src={soundboard}
          alt="Screenshot of a project displaying a pink soundboard"
          title="Soundboard"
          link="https://github.com/ibenkodehode/password-generator"
          icon={
            <>
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 /> <DiReact />
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
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 /> <DiReact />
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
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 /> <DiReact />
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
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 /> <DiReact />
              <SiTailwindcss /> <TbApi />
            </>
          }
          hoverColor="#1BB5EA80"
        />
        <Project
          src={pet}
          alt="Screenshot showing a pet registration form"
          title="Pet registration"
          link="https://keen-melba-0bbb72.netlify.app/"
          icon={
            <>
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 />
            </>
          }
          hoverColor="#82BDE080"
        />
        <Project
          src={horizon}
          alt="Screenshot showing a web page about the universe with the header Horizon"
          title="Gruppeprosjekt - Horizon"
          link=" https://cerulean-boba-d6f0ca.netlify.app/"
          icon={
            <>
              <SiCss3 /> <SiHtml5 />
            </>
          }
          hoverColor="#6E787780"
        />
        <Project
          src={dragon}
          alt="Screenshot showing a web page where you can but a dragon,landing page displaying an illustrated castle"
          title="Buy a dragon"
          link=" https://jocular-tiramisu-43a509.netlify.app/"
          icon={
            <>
              <SiCss3 /> <SiHtml5 />
            </>
          }
          hoverColor="#A43D3A80"
        />
      </div>
    </section>
  );
};

export default Projects;
