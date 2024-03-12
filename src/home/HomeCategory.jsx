import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Elige cualquier producto";
const title = "Compra todo con nosotros";
const btnText = "Empieza ahora";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Camera DSLR ",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Calzado",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Fotografia",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Ropa Formal",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Carteras y bolsos",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Decorado de interior",
  },
];
const HomeCategory = () => {
  return <div className="category-section style-4 padding-tb">
        <div className="container">
            {/*seccion header*/}
            <div className="section-header text-center">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title"><b>{title}</b></h2>
            </div>
            {/*seccion cards*/}
            <div className="section-wrapper">
                <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {
                        categoryList.map((val, i) => <div key={i} className="col">
                            <Link to="/shop" className="category-item">
                                <div className="category-inner">
                                    {/*imagenes*/}
                                    <div className="category-thumb">
                                        <img src={val.imgUrl} alt=""/>
                                    </div>
                                    {/*contenido*/}
                                    <div className="category-content">
                                        <div className="cate-icon">
                                            <i className={val.iconName} />
                                        </div>
                                        <Link to="/shop"><h6>{val.title}</h6></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>
                <div  className="text-center mt-5">
                    <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
                </div>
            </div>
            
        </div>
  </div>;
};

export default HomeCategory;
