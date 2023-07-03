import React, { useState } from "react";
import "./style.css";
function SortedBy() {
    const [open, setOpen] = useState(false);
    const [activeValue, setActiveValue] = useState("auto");

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const value = e.currentTarget.dataset.value;
        if (value) {
            setActiveValue(value);
            setOpen(false);
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

                <span className="found">Found: 0</span>
            </article>
            <article className="main__block-products block-products"></article>
        </>
    );
}
export { SortedBy };
