import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Accueil from "./Homepage/Accueil";
import Expertise from "./Homepage/Expertise";
import Quisommes from "./Homepage/Quisommes";
import Solutions from "./Homepage/Solutions";
import Contactez from "./Homepage/Contactez";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/quisommes" element={<Quisommes />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contactez" element={<Contactez />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
