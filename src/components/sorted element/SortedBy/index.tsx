import { Products } from "data/data";
import React, { useState } from "react";
import "./style.css";
interface Aa {
    dualSliderStockList: Products[];
}
function SortedBy({ dualSliderStockList }: Aa) {
    const [open, setOpen] = useState(false);
    const [activeValue, setActiveValue] = useState("auto");
    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const value = e.currentTarget.dataset.value;
        if (value) {
            setActiveValue(value);
            setOpen(false);
        }

        if (value === "auto") {
            const ProductsList: Products[] = [];
            dualSliderStockList.forEach((el) => ProductsList.push(el));
        } else if (value === "price ASC") {
            const ProductsList: Products[] = [];
            dualSliderStockList.forEach((el) => ProductsList.push(el));
            const PriceASC = ProductsList.sort((a, b) => {
                if (parseInt(a.price) > parseInt(b.price)) {
                    return -1;
                } else if (parseInt(b.price) > parseInt(a.price)) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (value === "price DESC") {
            const ProductsList: Products[] = [];
            dualSliderStockList.forEach((el) => ProductsList.push(el));
            const PriceDESC = ProductsList.sort((a, b) => {
                if (parseInt(a.price) > parseInt(b.price)) {
                    return 1;
                } else if (parseInt(b.price) > parseInt(a.price)) {
                    return -1;
                } else {
                    return 0;
                }
            });
        } else if (value === "rating ASC") {
            const ProductsList: Products[] = [];
            dualSliderStockList.forEach((el) => ProductsList.push(el));
            const ratingASC = ProductsList.sort((a, b) => {
                if (Number(a.rating) > Number(b.rating)) {
                    return -1;
                } else if (Number(b.rating) > Number(a.rating)) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (value === "rating DESC") {
            const ProductsList: Products[] = [];
            dualSliderStockList.forEach((el) => ProductsList.push(el));
            const ratingDESC = ProductsList.sort((a, b) => {
                if (Number(a.rating) > Number(b.rating)) {
                    return 1;
                } else if (Number(b.rating) > Number(a.rating)) {
                    return -1;
                } else {
                    return 0;
                }
            });
        } else if (value === "discount ASC") {
            const ProductsList: Products[] = [];
            dualSliderStockList.forEach((el) => ProductsList.push(el));
            const discountASC = ProductsList.sort((a, b) => {
                if (parseInt(a.discountPercentage) > parseInt(b.discountPercentage)) {
                    return -1;
                } else if (parseInt(a.discountPercentage) < parseInt(b.discountPercentage)) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (value === "discount DESC") {
            const ProductsList: Products[] = [];
            dualSliderStockList.forEach((el) => ProductsList.push(el));
            const discountDESC = ProductsList.sort((a, b) => {
                if (parseInt(a.discountPercentage) > parseInt(b.discountPercentage)) {
                    return 1;
                } else if (parseInt(a.discountPercentage) < parseInt(b.discountPercentage)) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
    };

    return (
        <>
            <article className="main__info-for-users">
                <div className="info-for-users__dropdown-container">
                    <h3 className="text-for-dropdown">Sort by</h3>
                    <nav className="dropdown">
                        <button
                            className={`dropdown__button ${open ? "drop" : "inactive"}`}
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            {activeValue}
                        </button>
                        <ul className={`dropdown__list ${open ? "drop" : "inactive"}`}>
                            <li
                                className={`dropdown__list-item ${activeValue === "auto" ? "active-sort" : "unactive"}`}
                                data-value="auto"
                                onClick={handleClick}
                            >
                                auto
                            </li>
                            <li
                                className={`dropdown__list-item ${
                                    activeValue === "price ASC" ? "active-sort" : "unactive"
                                }`}
                                data-value="price ASC"
                                onClick={handleClick}
                            >
                                price ASC
                            </li>
                            <li
                                className={`dropdown__list-item ${
                                    activeValue === "price DESC" ? "active-sort" : "unactive"
                                }`}
                                data-value="price DESC"
                                onClick={handleClick}
                            >
                                price DESC
                            </li>
                            <li
                                className={`dropdown__list-item ${
                                    activeValue === "rating ASC" ? "active-sort" : "unactive"
                                }`}
                                data-value="rating ASC"
                                onClick={handleClick}
                            >
                                rating ASC
                            </li>
                            <li
                                className={`dropdown__list-item ${
                                    activeValue === "rating DESC" ? "active-sort" : "unactive"
                                }`}
                                data-value="rating DESC"
                                onClick={handleClick}
                            >
                                rating DESC
                            </li>
                            <li
                                className={`dropdown__list-item ${
                                    activeValue === "discount ASC" ? "active-sort" : "unactive"
                                }`}
                                data-value="discount ASC"
                                onClick={handleClick}
                            >
                                discount ASC
                            </li>
                            <li
                                className={`dropdown__list-item ${
                                    activeValue === "discount DESC" ? "active-sort" : "unactive"
                                }`}
                                data-value="discount DESC"
                                onClick={handleClick}
                            >
                                discount DESC
                            </li>
                        </ul>
                    </nav>
                </div>

                <span className="found">Found: {dualSliderStockList.length}</span>
            </article>
            <article className="main__block-products block-products"></article>
        </>
    );
}
export { SortedBy };
