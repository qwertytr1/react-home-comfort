import React from "react";
import "components/cardlist/card/style.css";
import { MAX_RATING } from "data/const";
interface TypeList {
    link: string[];
    title: string;
    discount: string;
    price: string;
    manufacturer: string;
    rating: number;
}
function Card({ discount, price, rating, manufacturer, title, link }: TypeList) {
    return (
        <div className="products-card">
            <img className="products-card__img" src={`${link}`}></img>
            <div className="products-card__name">
                <h3 className="name">{title}</h3>
            </div>
            <div className="products-card__rating">
                {rating}/{MAX_RATING}
            </div>
            <div className="products-card__manufacturer">
                <p className="manufacturer">{manufacturer}</p>
            </div>
            <div className="products-card__flex">
                <div className="products-card__price">
                    <h3 className="titleCard">{price}</h3>
                    <div className="discount">-{discount}</div>
                </div>
                <div className="products-card__basket"></div>
            </div>
        </div>
    );
}
export { Card };
