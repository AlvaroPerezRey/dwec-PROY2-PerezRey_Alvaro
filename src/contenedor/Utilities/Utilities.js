import React from "react";
import ScreenHeading from "../../reutilizables/ScreenHeading/ScreenHeading";
import "./Utilities.css";
import Game from './components/Game'

//Componente Utilities con nuestro tictactoe dentro
export default function Utilities(props) {

  //Estructura del componente
  return (
    <div className="utility-container screen-container" id={props.id || ""}>
      <div className="utility-parent">
        <ScreenHeading title={"Utilities"} subHeading={"Algunas utilidades incorporadas"} />
        <div className="utility-card">
          <div className="utility-details">
            <Game/>
          </div>
        </div>
      </div>
    </div>
  );
}
