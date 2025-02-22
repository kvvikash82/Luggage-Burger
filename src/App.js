import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Section1 from "./pages/Home/Section1";
import Section2 from "./pages/Home/Section2";
import Section3 from "./pages/Home/Section3";
import Section4 from "./pages/Home/Section4";
import Section5 from "./pages/Home/Section5";
import Section6 from "./pages/Home/Section6";
import Section7 from "./pages/Home/Section7";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
  <>
  
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section1" element={<Section1 />} />
        <Route path="/section2" element={<Section2 />} />
        <Route path="/section3" element={<Section3 />} />
        <Route path="/section4" element={<Section4 />} />
        <Route path="/section5" element={<Section5 />} />
        <Route path="/section6" element={<Section6 />} />
        <Route path="/section7" element={<Section7 />} />

      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
