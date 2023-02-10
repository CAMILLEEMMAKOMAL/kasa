import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardItems from "../../assets/logements";
import Vector from "../../assets/Vector.svg";
import "./caroussel.css";

export default function Caroussel() {
  const { id } = useParams();
  const foundItem = cardItems.find((object) => object.id === id);
  const pictures = foundItem.pictures;

  const [current, setCurrent] = useState(0);

  /**
   * Si la diapositive actuelle est la dernière diapositive, passez à la première diapositive, sinon passez à la suivante
   * faire glisser.
   */
  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  /*
   * Si la diapositive actuelle est la première diapositive, définissez la diapositive actuelle sur la dernière diapositive, sinon
   * définir la diapositive actuelle sur la diapositive précédente.
   */
  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="slider">

      {/* Pour supprimer les flèches de navigation lorsqu'il n'y a qu'une seule photo,
       on  vérifie si la longueur de pictures est supérieure à 1 et
        n'afficher les boutons de navigation que s'il y a plus d'une photo : */}

      {pictures.length > 1 && (
        <React.Fragment>
          {/* Affichage des boutons de navigation du curseur */}
          <button className="vectorPrev">
            <img src={Vector} onClick={prevSlide} alt="fleche" />
          </button>
          <button className="vectorNext">
            <img src={Vector} onClick={nextSlide} alt="fleche" />
          </button>
        </React.Fragment>
      )}
      {/* Images */}
      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
            {index === current && (
              <strong className="image-number">
                {current + 1}/{pictures.length}
              </strong>
            )}
          </div>
        );
      })}
    </div>
  );
}