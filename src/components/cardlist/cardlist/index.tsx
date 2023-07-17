import { Products } from "data/data";
import React from "react";
import { Card } from "components/cardlist/card/index";
function CardList(data: Products[]) {
    return data.map(el => {
        return (
            <>
                <Card
                    key={el.id}
                    discount={el.discountPercentage}
                    rating={el.rating}
                    link={el.img}
                    title={el.title}
                    price={el.price}
                    manufacturer={el.brand}
                />
            </>
        );
    });
}
export { CardList };
