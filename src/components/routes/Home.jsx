//Sections
import Navbar from "../elements/Navbar";
import Landing from "../sections/Landing";
import Projects from "../sections/Projects";
import About from "../sections/About";

// Navigation arrow
import Arrow from "../elements/Arrow";

// Styles
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Landing />
      <Arrow />
      <Projects />
      <About />
    </div>
  );
};

export default Home;
