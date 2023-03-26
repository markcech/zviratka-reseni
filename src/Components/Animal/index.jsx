import React from "react";
import './style.css';

export const Animal = ({foto,nazev,latinsky,onClick}) => {
  return (
    <div className="animal" onClick={onClick}>
      <div className="animal__image">
        <img src={foto} alt={nazev} />
      </div>
      <div className="animal__desc">
        <div className="animal__name">{nazev}</div>
        <div className="animal__latin">{latinsky}</div>
      </div>
    </div>
  );
};
