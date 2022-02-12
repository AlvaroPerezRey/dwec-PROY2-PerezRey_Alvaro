import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* ETIQUETAS ESTATICAS Y LOGOS*/
  const resumeBullets = [
    { label: "Estudios", logoSrc: "education.svg" },
    { label: "Experiencia Laboral", logoSrc: "work-history.svg" },
    { label: "Herramientas de Desarrollo", logoSrc: "programming-skills.svg" },
    { label: "Proyectos", logoSrc: "projects.svg" },
    { label: "Intereses", logoSrc: "interests.svg" },
  ];

  /* TEXTO DE LAS PARTES DEL COMPONENTE */
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 75 },
    { skill: "Flask", ratingPercentage: 75 },
    { skill: "Laravel", ratingPercentage: 75 },
  ];

  const projectsDetails = [
    {
      title: <a href="https://alvaroperezrey.github.io/DWEC-PROY1-PerezRey_Alvaro/">Ryoukai:Aplicacion web sobre anime</a>,
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Primer proyecto de la asignatura de desarrollo web en entorno cliente donde debiamos creas una aplicacion web de la temática que quisieramos",
      subHeading: "Tecnología usada: JavaScript, HTML y CSS.",
    },
    {
      title: <a href="https://github.com/AlvaroPerezRey/tictactoe_react">TicTacToe</a>,
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Tres en raya creado para entender como funciona la librería React",
      subHeading:
        "Tecnología usada:  React.",
    },
    {
      title: <a href="https://github.com/AlvaroPerezRey/crud_react">Crud</a>,
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Crud sencillo creando con React para entender el funcionamiento de la libreria con componentes",
      subHeading:
        "Tecnología usada:  React.",
    },
  ];

  /* ESTRUCTURA DEL COMPONENTE */
  const resumeDetails = [
    /* ESTUDIOS */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"IES Fernando Aguilar Quignon, Cádiz, España"}
        subHeading={"Técnico Superior en Sistemas de Telecomunicaciones e Informática"}
        fromDate={"2018"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"IES Rafael Alberti, Cádiz, España"}
        subHeading={"Técnico Superior en Desarrollo de Aplicaciones Web"}
        fromDate={"2020"}
        toDate={"2022"}
      />
    </div>,

    /* EXPERIENCIA LABORAL */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"FreeTourNativos"}
          subHeading={"Especialista en base de datos y redes informáticas"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Trabajando con las herramientas de Google ADS para la
              mejora de SEO en las distintas partes de la web de la
              empresa.
          </span>
          <br />
          <span className="resume-description-text">
            - Organizando y llevando a cabo la remodelación de la web
              de la empresa mediante herramientas como Wordpress
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* HERRAMIENTAS DE DESARROLLO */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROYECTOS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* INTERESES */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Cómics"
        description="Soy bastante aficionado a los comics, sobre todo los mangas, aunque tambien me gustan los libros de ciencia ficción."
      />
      <ResumeHeading
        heading="Música"
        description="Escucho música siempre que puedo, trabajando, haciendo deporte o mientras hago las tareas del hogar, se diría que no puedo vivir sin música."
      />
      <ResumeHeading
        heading="Videojuegos"
        description="Desde pequeño he disfrutado de los videojuegos y ahora sigo haciendolo sobre todo en ordenador con amigos."
      />
    </div>,
  ];

  /* ANIMACION DE LAS ETIQUETAS DEL COMPONENTE */
  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resumen"} subHeading={"Información sobre mi"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;