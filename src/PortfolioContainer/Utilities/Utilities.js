import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./Utilities.css";

//Componente Utilities AUN NO TERMINADO
export default function Utilities(props) {

  const SCREEN_CONSTANTS = {
    description:
      "Desarrollador web FullStack con conocimientos en diferentes librerias de JavaScript y otros lenguajes para sacar el maximo rendimientos a las aplicaciones que creo",
    highlights: {
      bullets: ["Full Stack Web", "Diseño Frontend interactivo", "React"],
      heading: "Algunos puntos destacados:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  //Estructura del componente
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"Utilities"} subHeading={"Algunas utilidades incorporadas"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="about-me-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              > Contacto </button>
              <a href="CV_Alvaro.pdf" download="Alvaro CV_Alvaro.pdf">
                <button className="btn highlighted-btn">Obtener CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
