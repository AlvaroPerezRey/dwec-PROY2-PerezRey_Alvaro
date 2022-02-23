import React from "react";
import { TOTAL_SCREENS } from "../reutilizables/Screens";

//Componente contenedor, donde estaran todas las ventanas o Screens de cada componente
export default function PortfolioContainer() {

  //Recorreremos todas nuestras Screens con su estructura y los mostraremos en pantalla con una key e id
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  return <div className="portfolio-container">{mapAllScreens()}</div>;
}
