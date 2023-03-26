import React from "react";
import './style.css';

export const AnimalDetail = ({zvire}) => {
    return (
    
      <div className="detail" key={zvire.id}>
        <div className="detail__content">
          <div className="detail__header">
            <img className="detail__image" src={zvire.foto} alt={zvire.nazev} />
            <div className="detail__title">
              <h2 className="detail__name">
                <span>{zvire.nazev}</span>
              </h2>
              <div className="detail__latin">
                <span>{zvire.latinsky}</span>
              </div>
            </div>
          </div>

          <div className="detail__info">
            <p className="detail__desc">
              {zvire.popis}
            </p>

            <div className="detail__items">
              <div className="detail__item">
                <h3>Domovina</h3>
                <p>{zvire.domovina}</p>
              </div>
              <div className="detail__item">
                <h3>Biotop</h3>
                <p>{zvire.biotop}</p>
              </div>
              <div className="detail__item">
                <h3>Potrava</h3>
                <p>{zvire.potrava}</p>
              </div>
              <div className="detail__item">
                <h3>Velikost</h3>
                <p>{zvire.velikost}</p>
              </div>
            </div>

            <div className="detail__zoo">
              <h3>Najdete v těchto ZOO</h3>
              <p>{zvire.zoo}</p>
            </div>
          </div>
        </div>
      </div>
  
  );
};
