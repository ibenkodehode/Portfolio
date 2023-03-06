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
import { SiTailwindcss } from "react-icons/si"; //tailwind
import { SiHtml5 } from "react-icons/si"; //html5
import { TbApi } from "react-icons/tb"; //API

const Projects = () => {
  return (
    <section id="prosjekter" className={styles.section}>
      <h3 className={styles.header}>PROSJEKTER</h3>
      <div className={styles.flex}>
        <Project
          src={soundboard}
          alt="Screenshot of a project displaying a pink soundboard"
          title="Soundboard"
          link="https://github.com/ibenkodehode/soundboard"
          web="https://ibenkodehode.github.io/soundboard/"
          icon={
            <>
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 />
            </>
          }
          hoverColor="#e7c3d870"
          about="Første oppgave etter JavaScript Basics. Soundboard med trommelyder som avslilles enten ved å trykke eller bruke tastatur. Høydepunket i denne oppgaven var hvor komprimert jeg kalrte å gjøre koden!"
        />
        <Project
          src={generatePassword}
          alt="Screenshot showing a webpage generating a random password"
          title="Generate random password"
          link="https://github.com/ibenkodehode/password-generator"
          web="https://ibenkodehode.github.io/password-generator/"
          icon={
            <>
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 />
            </>
          }
          hoverColor="#54ab9280"
          about="Solo Prosjet fra Scrimba. Generere to forskjellige og tilfeldige passord.  "
        />
        <Project
          src={basket}
          alt="Screenshot showing a webpage counting basket points"
          title="Basketball score"
          link="https://github.com/ibenkodehode/basketball-score"
          web="https://ibenkodehode.github.io/basketball-score/"
          icon={
            <>
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 />
            </>
          }
          hoverColor="#C8443380"
          about="Solo Prosjet fra Scrimba. En enkel side til å telle poeng i kamp. Kan øke poeng fra en til tre, og nullstilles. "
        />
        <Project
          src={weather}
          alt="Screenshot showing a weather app"
          title="Weather"
          link="https://github.com/ibenkodehode/weather"
          web="https://ibenkodehode.github.io/weather/"
          icon={
            <>
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 /> <DiReact />
              <SiTailwindcss /> <TbApi />
            </>
          }
          hoverColor="#1BB5EA80"
          about="En applikasjon der man søke for å sjekke det nåværende været. Dette var andre gang jeg har jobbet med en API. "
        />
        <Project
          src={pet}
          alt="Screenshot showing a pet registration form"
          title="Pet registration"
          link="https://github.com/ibenkodehode/modulA-petRegistration"
          web="https://keen-melba-0bbb72.netlify.app/"
          icon={
            <>
              <SiHtml5 /> <SiCss3 /> <DiJavascript1 />
            </>
          }
          hoverColor="#82BDE080"
          about="Innlevering vi hadde andre måneden på kurs i HTML og CSS. Dette var første gang jeg skrev en kode i JavaScript, uten å være klar over det, for å hente frem illustrasjoner etter hvilke hunderase som ble valgt."
        />
        <Project
          src={horizon}
          alt="Screenshot showing a web page about the universe with the header Horizon"
          title="Gruppeprosjekt - Horizon"
          link="https://github.com/ibenkodehode/horizon"
          web="https://cerulean-boba-d6f0ca.netlify.app/"
          icon={
            <>
              <SiCss3 /> <SiHtml5 />
            </>
          }
          hoverColor="#6E787780"
          about="Andre måneden på kurs hadde vi et gruppeprosjekt der vi skulle lage en nettside med tema solsystemet ved hjelp av HTML og CSS. Her stod jeg for velkomstsiden og siden om de forskjellige planetene. "
        />
        <Project
          src={dragon}
          alt="Screenshot showing a web page where you can but a dragon,landing page displaying an illustrated castle"
          title="Buy a dragon"
          link="https://github.com/ibenkodehode/modulA-dragonsParallax"
          web=" https://jocular-tiramisu-43a509.netlify.app/"
          icon={
            <>
              <SiCss3 /> <SiHtml5 />
            </>
          }
          hoverColor="#A43D3A80"
          about="Tredje uke på kurs og mitt første forsøk på parallax effect. Koste meg masse med denne oppgaven og ville lage noe gøy"
        />
      </div>
    </section>
  );
};

export default Projects;
