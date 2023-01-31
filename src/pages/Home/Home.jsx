//Sections
import Navbar from "../../components/Navbar/Navbar";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import About from "../About/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
      <About />
    </>
  );
};

export default Home;
