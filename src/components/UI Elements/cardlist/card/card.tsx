import React from 'react';
import './card.css';
function Card() {
  return (
    <div className="products-card">
      <div className="products-card__flex">
        <div className="products-card__basket"></div>
        <div className="products-card__price">
          <div className="discount"></div>
          <h3 className="titleCard"></h3>
        </div>
      </div>
      <div className="products-card__rating"></div>
      <div className="products-card__manufacturer">
        <p className="manufacturer"></p>
      </div>
      <div className="products-card__name">
        <h3 className="name"></h3>
      </div>
      <img className="products-card__img"></img>
    </div>
  );
}
export { Card };
