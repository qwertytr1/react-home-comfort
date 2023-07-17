import React from "react";
import "components/cardlist/card/style.css";

function Card(
    link: string[],
    title: string,
    discount: string,
    titleCard: string,
    manufacturer: string,
    rating: number
) {
    return (
        <div className="products-card">
            <div className="products-card__flex">
                <div className="products-card__basket"></div>
                <div className="products-card__price">
                    <div className="discount">{discount}</div>
                    <h3 className="titleCard">{titleCard}</h3>
                </div>
            </div>
            <div className="products-card__rating">{rating}</div>
            <div className="products-card__manufacturer">
                <p className="manufacturer">{manufacturer}</p>
            </div>
            <div className="products-card__name">
                <h3 className="name">{title}</h3>
            </div>
            <img className="products-card__img" src={`${link}`}></img>
        </div>
    );
}
export { Card };
