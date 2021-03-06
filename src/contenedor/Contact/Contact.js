import React from "react";
import Typical from "react-typical";
import emailjs from 'emailjs-com';
import imgBack from "../../../src/assets/Contact/mailz.jpeg";
import ScreenHeading from "../../reutilizables/ScreenHeading/ScreenHeading";
import Footer from "./Footer/Footer"
import Swal from "sweetalert2";
import "./Contact.css";

//Componente ContactMe
export default function ContactMe(props) {

    //Funcion para implementar la funcionalidad de la libreria EmailJS
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

    //Funcion para utilzar la libreria SweetAlert con su estructura
    const submitForm = () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje enviado',
        showConfirmButton: false,
        timer: 1500
      });
    };

  //Estructura del componente con los eventos onSubmit y onClick
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
            <input type="text" id="nombre" name="name" pattern="[A-Za-z]{3,12}" required/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>

            <label htmlFor="message">Asunto</label>
            <textarea type="text" id="asunto" name="message" required/>

            <div className="send-btn">
              <button  type="submit" onClick={submitForm}>
                Enviar 
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}