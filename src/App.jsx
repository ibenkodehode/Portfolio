// Libraries
import { useRef } from "react";
import { gsap } from "gsap";

// Styles
import "./App.css";

// Pages
import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";

// Icons
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  const landingRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app" ref={topRef}>
      <header>
        <nav>
          <button onClick={() => handleClick(landingRef)}>Landing</button>
          <button onClick={() => handleClick(projectsRef)}>Projects</button>
          <button onClick={() => handleClick(aboutRef)}>About</button>
        </nav>
      </header>

      <main>
        <div ref={landingRef}>
          <Landing />
        </div>
        <button onClick={() => handleClick(topRef)} className="top-btn">
          <AiOutlineArrowUp />
        </button>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
