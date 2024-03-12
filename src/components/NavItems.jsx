import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //otros eventos
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/*menu*/}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Crear Cuenta</span>
            </Link>
            <Link to="/login">
              <span>Registrar</span>
            </Link>
          </div>
        </div>
      </div>
      {/*boton en encabezado*/}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/*logo*/}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            {/*menu area*/}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to={"/"}>Inicio</Link>
                  </li>
                  <li>
                    <Link to={"/shop"}>Tienda</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>Nosotros</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contacto</Link>
                  </li>
                </ul>
              </div>

              {/*crear cuenta y registro*/}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${
                  menuToggle ? "active" : " "
                }`}
              >
                <Link to="/sign-up" className="lab-btn me-3 d-dm-block d-none">
                  Crear Cuenta
                </Link>
                <Link to="/login" className="d-none d-md-block">
                  Registar
                </Link>

                {/*menu toggle*/}
                <div
                  onClick={() => setMenuToggle(!menuToggle)}
                  className={`header-bar d-lg-none ${
                    menuToggle ? "active" : ""
                  }}`}>
                  <span className="d-inline-block search-toggle"></span>
                  <span className="d-inline-block search-toggle"></span>
                  <span className="d-inline-block search-toggle"></span>
                </div>
              </div>
              {/*social*/}
              <div
                className="ellepsis-bar d-dm-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
