import Project from "../elements/Project";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <section id="prosjekter">
      <h3>Prosjekter</h3>
      <div className={styles.flex}>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
