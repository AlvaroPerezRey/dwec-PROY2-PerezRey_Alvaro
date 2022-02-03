import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
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
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A Personal Portfolio website to Showcase all my details",
      subHeading: "Technologies Used: ReactJS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A Personal Portfolio website to Showcase all my details",
      subHeading: "Technologies Used: ReactJS, Bootstrap",
    },
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description: "A Personal Portfolio website to Showcase all my details",
      subHeading: "Technologies Used: ReactJS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume.screen-container" key="education">
      <ResumeHeading
        heading={"University of Legon Accra, India"}
        subHeading={"Bachelor of Science information Technology"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"University of Legon Accra, India"}
        subHeading={"Bachelor of Science information Technology"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"University of Legon Accra, India"}
        subHeading={"Bachelor of Science information Technology"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"University of Legon Accra, India"}
        subHeading={"Bachelor of Science information Technology"}
        fromDate={"2020"}
        toDate={"2021"}
      />
    </div>,
    <div className="resume.screen-container" key="work-experience">
      <ResumeHeading
        heading={"Alvaro Technology"}
        subHeading={"Full Stack hermanito"}
        fromDate={"2018"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as Student in Caisity ya tu sabe pa
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          Developeando un poquito de cada sitio que veo
        </span>
        <br />
        <span className="resume-description-text">
          Developeando un poquito de cada sitio que veo
        </span>
        <br />
        <span className="resume-description-text">
          Developeando un poquito de cada sitio que veo
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>,

        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectsDetails, index) => (
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
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
            heading="Learning"
            description="Apart from being a tech enthusiast and a code writer"
            />
                        <ResumeHeading
            heading="Learning"
            description="Apart from being a tech enthusiast and a code writer"
            />
                        <ResumeHeading
            heading="Learning"
            description="Apart from being a tech enthusiast and a code writer"
            />
        </div>

    </div>
  ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}
