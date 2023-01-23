// Libraries
import { useRef } from "react";

// Styles
import "./App.css";

// Pages
import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";

function App() {
  const landingRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app">
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
