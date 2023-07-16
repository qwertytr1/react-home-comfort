import React, { useState } from "react";
import "app/layout/header/style.css";
import { NavLink } from "react-router-dom";
interface TypeForSetDataList {
    onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function Header({ onChangeHandler }: TypeForSetDataList) {
    const [open, setOpen] = useState(false);
    return (
        <div className="header__container _container">
            <h1 className="title">
                HOME<span>COMFORT</span>
            </h1>

            <h3 className="total">
                TOTAL: <span>0$</span>{" "}
            </h3>
            <div className="header__burgerMenu"></div>
            <div className="searchAndShoppingBasket">
                <div className={`searchAndShoppingBasket__search ${open ? "active" : "inactive"}`}>
                    <input
                        type="text"
                        placeholder="Please enter your text..."
                        className={`search-input  ${open ? "active" : "inactive"}`}
                        onChange={onChangeHandler}
                    />
                    <div
                        className={`search-btn  ${open ? "active" : "inactive"}`}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <i className="fas fa-search"></i>
                    </div>
                    <div
                        className={`cancel-btn ${open ? "active" : "inactive"}`}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <NavLink to="/basket" className="searchAndShoppingBasket__ShoppingBasket">
                    <span className="Basket__counter">0</span>
                </NavLink>
            </div>
        </div>
    );
}
export { Header };
