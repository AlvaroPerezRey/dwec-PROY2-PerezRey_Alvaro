import React from "react";
import "./Footer.css";

//Footer del home para simular la ola en el componente Home
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="no internet connection"
        />
      </div>
    </div>
  );
}
