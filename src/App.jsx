// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Routes
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
