import React from "react";
import style from "../Cards/cards.module.css";

const Cards = ({ code, name, fecha, valor, unidad }) => {
  return (
    <div className={style.containerCard}>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <h2 className={style.nameCards}>{name}</h2>
          <div className="">
            <h4 className="">Valor: {valor}</h4>
            <h4 className=""> Fecha: {fecha}</h4>
            <h4 className="">Unidad: {unidad}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
