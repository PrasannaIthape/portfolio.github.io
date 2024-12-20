import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Resume from "./pages/resume";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        {/* Uncomment and add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
