import React from "react";
import "./Footer.css";

//Componente Footer
export default function Footer() {
  //Estructura del componente
  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <div class="cta-text">
                  <h4>Encuéntranos</h4>
                  <span>Plaza España, 2N , 11007 Cadiz</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <div class="cta-text">
                  <h4>Llámanos</h4>
                  <span>768654320</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <div class="cta-text">
                  <h4>Escríbenos</h4>
                  <span>alvaroperez@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>Copyright &copy; 2022, All Right Reserved </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li>
                    <a href="#">Terminos</a>
                  </li>
                  <li>
                    <a href="#">Privacidad</a>
                  </li>
                  <li>
                    <a href="#">Politica</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
