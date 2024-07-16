import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Thirty from "./Components/Thirty";
import Sixty from "./Components/Sixty";
import Ninety from "./Components/Ninety";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

function App() {
  const [heroVisible, setHeroVisible] = useState(true);

  return (
    <Router>
      <div>
        <Navbar setHeroVisible={setHeroVisible} />
        <Routes>
          <Route path="/" element={<Home heroVisible={heroVisible} />} />
          <Route
            path="/30-minutes"
            element={<Thirty heroVisible={heroVisible} />}
          />
          <Route
            path="/60-minutes"
            element={<Sixty heroVisible={heroVisible} />}
          />
          <Route
            path="/90-minutes"
            element={<Ninety heroVisible={heroVisible} />}
          />
          <Route
            path="/about"
            element={<AboutUs heroVisible={heroVisible} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
