import React from "react";
import { Animal } from "../../Components/Animal";
import "./style.css";

export const AnimalList = ({ zvirata, onSelect }) => {
  return (
    <div className="animal-list">
      {zvirata.map((zvire) => (
        <Animal
          foto={zvire.foto}
          nazev={zvire.nazev}
          latinsky={zvire.nazevLatinsky}
          key={zvire.id}
          onClick={() => onSelect(zvire)}
        />
      ))}
    </div>
  );
};
