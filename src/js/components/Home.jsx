import React from "react";

// Importación correcta de la imagen
import rigoImage from "../../img/rigo-baby.jpg";
import { card } from "./Card";

const Home = () => {
  const name = 'pepito margarita';
  const myfunction = () => {
    return 'hola soy una func' 
  }

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <p>{myfunction()}</p>
      <p>
        {/* Usamos el nombre de la variable que importamos arriba */}
        <img src={rigoImage} alt="Rigo Baby" />
      </p>
      <a href="#" className="btn btn-success">
        if you see this green button... bootstrap is working... {name}
      </a>
      <p>
        Made by{" "}
        <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
      </p>
    </div>
  );
};

export default Home;