import React from "react";
import "./FooterHome.css";

//Footer del home para simular la ola en el componente Home
export default function FooterHome() {
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
