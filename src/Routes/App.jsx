//importe la bibliothèque React dans le fichier.
import React from "react";
//importe les composants nécessaires pour la gestion des routes dans une application React.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Logement from "../pages/Logement/Logement";
import Error from "../pages/Error/Error";

//déclare la fonction principale de l'application, qui sera exportée pour être utilisée ailleurs.
export default function App() {
  return (
    //retourne un composant BrowserRouter qui sera le conteneur pour les routes de l'application.
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
