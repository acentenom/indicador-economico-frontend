import React from "react";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";


const Home = () => {
  const [indicador, setIndicators] = useState();

  useEffect(() => {
    const indicador = async () => {
      const getIndicadores = await fetch("http://localhost:3001/indicadores");
      const indicador = await getIndicadores.json();
      setIndicators(indicador);
    };
    indicador();
  }, []);

  return (

    <div className="">
       <Navbar />
      <div >
        <div className="container card-group">
          {indicador?.map((indi, index) => {
            return (
              <div key={index}>
                <Cards code={indi.codigo} valor={indi.valor} name = {indi.nombre} fecha = {indi.fecha.slice(0,10)} unidad = {indi.unidad_medida}  />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
