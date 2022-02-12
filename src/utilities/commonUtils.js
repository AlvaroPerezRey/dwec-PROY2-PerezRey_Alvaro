import Home from "../PortfolioContainer/Home/Home"
import About from "../PortfolioContainer/About/About";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
import Contact from "../PortfolioContainer/Contact/Contact";

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
        screen_name: "Contact Me",
        component: Contact,
    },
];


export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1;
  
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
      if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
  
    return -1;
  };