//importe la bibliothèque React.
import React from "react";
import { useState } from "react";
import Vector from "../../assets/Vector.svg";
import "./collapse.css";

//exportée pour être utilisable dans d'autres parties de l'application
export default function Collapse(props) {
  // définit un état pour contrôler l'affichage du texte. La valeur initiale est "none" pour masquer le texte.
  const [display, setDisplay] = useState("none");
  // définit un état pour contrôler la class "active" qui sera ajoutée au div contenant le texte.
  const [isActive, setIsActive] = useState("");
  // définit un état pour contrôler la rotation de l'icône fléchée. La valeur initiale est "180deg" pour afficher la flèche vers le bas.
  const [rotate, setRotate] = useState("0deg");

  // définit une fonction qui sera appelée lorsque le titre est cliqué. Cette fonction met à jour 
  //les états pour afficher/masquer le texte et faire tourner l'icône fléchée.
  function inputCollapse() {
    setIsActive(isActive === "" ? "active" : "");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
  }

  // renvoie le rendu du composant, qui comprend un div pour 
  //le titre avec un onClick pour appeler la fonction inputCollapse
  return (
    <div class="collapse-box">
      <div className="collapse-block" onClick={inputCollapse}>
        <h1 id="title">{props.title}</h1>
        <button>
          <img
            className="vector"
            src={Vector}
            style={{ rotate: `${rotate}` }}
            alt="chevron"
          />
        </button>
      </div>
      <div class="containertexte">
          <div 
            className={`texte ${isActive}`}
            key={props.id}
            style={{ display: `${display}` }}
            >
            {props.texte}
          </div>
      </div>
    </div>
  );
}
