// Libraries
import { HashRouter, Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
