import React from "react";
//importe le composant "Link" de la bibliothèque "react-router-dom", 
//qui sera utilisé pour créer un lien hypertexte.
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import "./Error.css";

export default function Error() {
  return (
    <div className="BodyError">
      <Header />
      <div className="blocError">
        <strong>404</strong>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}
