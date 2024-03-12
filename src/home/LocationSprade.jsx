import React from "react";
import { Link } from "react-router-dom";

const title = "Más de 60.000 clientes";

const desc =
  "Compra productos en cualquier dispositivo, con nuestra aplicación y disfruta de tu tiempo como quieras. Simplemente descargue e instale y comience a comprar";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];

const LocationSprade = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
          </div>

          {/*seccion main*/}
          <div className="section-wrapper">
            <div className="clients">
              {
              clientsList.map((val, i) => (
                <div key={i} className="client-list">
                  <Link to="/signup" className="client-content">
                    <span>{val.text}</span>
                  </Link>
                  <div className="client-thumb">
                    <img src={val.imgUrl} alt=""/>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
