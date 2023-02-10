//importent les packages React et useEffect et useState de React.
import React from "react";
import { useEffect, useState } from "react";

//Importent les composants Header, Footer, imageAbout, imageAboutMobile et le fichier de style "About.css".
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import imageAbout from "../../assets/imageAbout.jpg";
import imageAboutMobile from "../../assets/imageAboutMobile.jpg";
import "./About.css";
import Collapse from "../../components/collapse/collapse";


//Déclare une fonction nommée About qui renvoie du code JSX pour construire la page "About".
export default function About() {

  //Déclare une fonction interne nommée AboutItems qui renvoie un tableau d'objets contenant des informations sur Kasa.
  function AboutItems() {
    const Items = [
      {
        id: 1,
        title: "Fiabilité",
        texte:
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logement et toutes les informations sont régulièrement vérifiées par nos équipes.",
      },
      {
        id: 2,
        title: "Respect",
        texte:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre platforme.",
      },
      {
        id: 3,
        title: "Service",
        texte:
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
      {
        id: 4,
        title: "Sécurité",
        texte: `La sécurité est la priorité est la priorité de Kasa aussi bien pour nos hôtes que pour les voyageurs. Chaque logement correspond aux critères de sécurité établis par nos services. 
        En laissant unenote aussi bien à l'hôte qu'aux locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.`,
      },
    ];
    return Items;
  }
  const Items = AboutItems();

  //Déclare une variable mode qui utilise useState pour gérer le mode de visualisation de l'image 
  //de couverture (mobile, tablette ou ordinateur de bureau).
  const [mode, setMode] = useState("desktop");

  //useEffect est utilisé pour déterminer le mode de visualisation en fonction
  // de la largeur de la fenêtre du navigateur et pour mettre à jour la variable mode 
  //lorsque la fenêtre est redimensionnée.
  
  useEffect(() => {
    if (window.innerWidth >= 993) {
      setMode("desktop");
    } else if (window.innerWidth >= 769 && window.innerWidth <= 992) {
      setMode("tablet");
    } else {
      setMode("mobile");
    }
    window.addEventListener("resize", onResize);

    function onResize() {
        if (window.innerWidth >= 993 && mode !== "desktop") {
          setMode("desktop");
        } else if (window.innerWidth >= 769 && window.innerWidth <= 992 && mode !== "tablet") {
          setMode("tablet");
        } else if (window.innerWidth < 769 && mode !== "mobile");
    }
  },[]);


  return (
    <div>
      <Header />
      <div className="cover">
          <img
            className={mode}
            src={mode === "mobile" ?  imageAboutMobile : imageAbout}
            alt="montagnes"
          />
      </div>
          {Items.map((item) => {
            return <Collapse title={item.title} texte={item.texte} key={item.id} />;
          })}
            <div className="footerabout">
                  <Footer />
            </div> 
    </div>
  );
}
