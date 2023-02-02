//Sections
import Navbar from "../elements/Navbar";
import Landing from "../sections/Landing";
import Icons from "../elements/CodeIcons";
import Projects from "../sections/Projects";
import Favorites from "../sections/Favorites";
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
      <Icons />
      <Arrow />
      <Projects />
      <Favorites />
      <About />
    </div>
  );
};

export default Home;

// TODO
// footer
