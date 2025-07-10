import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/skills.jsx";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
