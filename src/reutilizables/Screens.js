import Home from "../contenedor/Home/Home";
import About from "../contenedor/About/About";
import Academics from "../contenedor/Academics/Academics";
import Feedback from "../contenedor/Feedback/Feedback";
import Utilities from "../contenedor/Utilities/Utilities";
import Contact from "../contenedor/Contact/Contact";
import Footer from "../contenedor/Footer/Footer";

//Lista de Diccionarios donde declaramos las Screens con sus componentes asociados
export const TOTAL_SCREENS = [
  {
    screen_name: "",
    component: Home,
  },
  {
    screen_name: "About",
    component: About,
  },
  {
    screen_name: "Resumen",
    component: Academics,
  },
  {
    screen_name: "Feedback",
    component: Feedback,
  },
  {
    screen_name: "Utilities",
    component: Utilities,
  },
  {
    screen_name: "Contact",
    component: Contact,
  },
  {
    screen_name: "",
    component: Footer,
  },
];

//Obtenemos las Screens
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
