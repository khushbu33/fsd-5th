import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header.jsx";
import Body from "./Component/Body.jsx";
import Footer from "./Component/Footer.jsx";
import About from "./Component/About.jsx";
import Home from "./Component/Home.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Body />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

