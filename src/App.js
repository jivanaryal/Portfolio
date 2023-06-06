import React from "react";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Hoc/Layout/Layout";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Projects from "./Pages/Projects";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
