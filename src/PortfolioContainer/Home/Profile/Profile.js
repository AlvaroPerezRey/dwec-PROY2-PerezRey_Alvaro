import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

//Componente Profile dentro del componente Home
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
            <a href="https://github.com/AlvaroPerezRey">
                <i className="fa fa-github-square"/>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram"/>
              </a>
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"/>
              </a>
              <a href="https://twitter.com/">
                <i className="fa fa-twitter-square"/>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube-square"/>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hola, Soy <span className="highlighted-text">Alvaro</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer 😎",
                    1000,
                    "Frontend 💻",
                    1000,
                    "Backend 💻",
                    1000,
                    "JavaScript-React 🔴",
                    1000,
                    "Python-Flask 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Desarrollador de aplicaciones web
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToContactMe()}
            > Contacto </button>
            <a href="CV_Alvaro.pdf" download="CV_Alvaro.pdf">
              <button className="btn highlighted-btn">Obtener CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}