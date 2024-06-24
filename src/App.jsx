import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Actualizamos el estado con los datos obtenidos de la API
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {products.map((product) => (
          <Card
            title={product.title}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
