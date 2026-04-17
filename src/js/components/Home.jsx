import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


import { useState, useEffect } from 'react';
function Temporizador() {
const [segundos, setSegundos] = useState(0);

useEffect(() => {
const intervalo = setInterval(() => {
	setSegundos(prev => prev + 1);
    }, 1000);


    return () => clearInterval(intervalo);
  }, []);

  return <h1>Segundos: {segundos}</h1>;
}


//create your first component
const Home = () => {
	return (
		<div className="text-center">
            

function InnerHtm () {
        <div className = 'container'>
			<div className = 'float'>
                <span className = 'tama bg-warning text-dark'>Reloj</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
			</div>
        </div>
}
		</div>
	);
};

export default Home;