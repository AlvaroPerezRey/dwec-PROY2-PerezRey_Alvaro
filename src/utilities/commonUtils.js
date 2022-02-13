import Home from "../PortfolioContainer/Home/Home"
import About from "../PortfolioContainer/About/About";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
import Utilities from "../PortfolioContainer/Utilities/Utilities";
import Contact from "../PortfolioContainer/Contact/Contact";

//Conexion de los elementos del header con cada componente
export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "About Me",
        component: About,
    },
    {
        screen_name: "Resumen",
        component: Resume,
    },
    {
        screen_name: "Portfolio",
        component: Testimonial,
    },
    {
        screen_name: "Utilities",
        component: Utilities,
    },
    {
        screen_name: "Contact Me",
        component: Contact,
    },
];

//Interaccion de la ventana del navegador hasta el componente que clickamos
export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
  
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
      if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
  
    return -1;
  };