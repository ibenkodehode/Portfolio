//Sections
import Navbar from "../../components/Navbar/Navbar";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import About from "../About/About";

// Navigation arrow
import Arrow from "../../components/Arrow/Arrow";

// Styles
import styles from "./Home.module.css";

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
