import React, { useState } from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link desde la librería adecuada
import productData from "../products.json";
import SelectedCategory from "../components/SelectedCategory";

const title = (
  <h2>
    Busca el tuyo entre{" "}
    <span>
      <b>miles</b>
    </span>{" "}
    de productos
  </h2>
);
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants", // Corregido "then" a "than"
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const desc = "Nosotros tenemos una gran colección de productos";
const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData); // Corregido el nombre de la variable

  // filtro de busqueda
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // filtro de productos basado en la busqueda
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered); // Corregido el nombre de la función para establecer los productos filtrados
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"}/>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Busca tu producto"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
