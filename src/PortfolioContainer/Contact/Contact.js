import React, { useState } from "react";
import Typical from "react-typical";
import emailjs from 'emailjs-com';

import imgBack from "../../../src/assets/Contact/mailz.jpeg";
import load1 from "../../../src/assets/Contact/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Contact.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Portfolio', 'template_portfolio', e.target, 'user_0L1Sd88NY4qZ8OTK9hd2q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://web.facebook.com/?_rdc=1&_rdr">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/instructor_ehizeex/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
            <i className="fa fa-youtube-square" />
          </a>
          <a href="https://twitter.com/Ehiedu_baba">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}