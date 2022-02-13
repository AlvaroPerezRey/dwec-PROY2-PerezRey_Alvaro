import React from "react";
import Typical from "react-typical";
import emailjs from 'emailjs-com';
import imgBack from "../../../src/assets/Contact/mailz.jpeg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Contact.css";

//Componente ContactMe
export default function ContactMe(props) {

    const sendEmail = (e) => {
      e.preventDefault();
  
      //Libreria de emailJS con la estructura necesaria para utilizarla
      emailjs.sendForm('Portfolio', 'template_portfolio', e.target, 'user_0L1Sd88NY4qZ8OTK9hd2q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  //Estructura del componente
  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Ponte en contacto"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Escribeme 📧", 1000]} />
          </h2>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>¡Escribe tu email aqui!</h4>
            <img src={imgBack}/>
          </div>
          <form onSubmit={sendEmail}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="message">Asunto</label>
            <textarea type="text" name="message" />

            <div className="send-btn">
              <button type="submit">
                Enviar 
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}