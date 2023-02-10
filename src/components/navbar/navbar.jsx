import React from "react";
// importe le composant "NavLink" de la bibliothèque 
//"react-router-dom". Ce composant permet de créer des liens hypertextes 
//pour naviguer entre les différentes pages de l'application.
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  

  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activated" : "link")}
                end 
                >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activated" : "link")}
              to="/about"
              end
              >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}