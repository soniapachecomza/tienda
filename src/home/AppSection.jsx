import React from "react";
import { Link } from "react-router-dom";

const btnText = "Registrate gratis";
const title = "Comprar en cualquier momento y en cualquier lugar";
const desc = "Compra con cualquier dispositivo con nuestra aplicación y aprende en todo momento lo que quieras. Descargua e instala y comienza a aprender";
const AppSection = () => {
  return (
    <div className="app-section padding-tb">
        <div className="container">
            <div className="section-header text-center">
                <Link to="/sign-up" className="lab-btn mb-4">{btnText}</Link>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
            </div>

            <div className="section-wrapper">
                <ul className="lab-ul">
                    <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
};

export default AppSection;
