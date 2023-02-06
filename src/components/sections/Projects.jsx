// components
import Project from "../elements/Project";

// styles
import styles from "../styles/Projects.module.css";

//images
import soundboard from "../../img/soundboard.png";
import generatePassword from "../../img/passwordgenerator.png";

const Projects = () => {
  return (
    <section id="prosjekter">
      <h3>Prosjekter</h3>
      <div className={styles.flex}>
        <Project
          src={soundboard}
          alt="Screenshot of a project displaying a pink soundboard"
          title="Soundboard"
          icon="test"
          hoverColor="#E7C3D8"
        />
        <Project
          src={generatePassword}
          alt="Screenshot showing a webpage generating a random password"
          title="Generate random password"
          icon="test"
          hoverColor="#00B987"
        />
      </div>
    </section>
  );
};

export default Projects;
