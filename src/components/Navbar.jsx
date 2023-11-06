// Navbar.js

import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/accueil">Acceuil</Link>
      <Link to="/expertise">Expertise</Link>
      <Link to="/quisommes">Quisommes</Link>
      <Link to="/solutions">Solutions</Link>
      <Link to="/contactez">Contactez</Link>
    </nav>
  );
}

export default Navbar;
