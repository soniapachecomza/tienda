import React from "react";

const subtitle = "Ofertas del día";
const title = (
  <h2 className="title">
    Únite a un taller gratuito de un día de duración para{" "}
    <b>
      dominar<span>las ventas </span>
    </b>{" "}
    por adelantado
  </h2>
);

const desc = "¡Oferta por tiempo limitado! Apresúrate";
const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subtitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Registrate ahora</h4>
              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre  completo *"
                  className="reg-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electronico"
                  className="reg-input"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Telefono"
                  className="reg-input"
                />
                <button type="submit" className="lab-btn">
                  Registrate aquí
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
