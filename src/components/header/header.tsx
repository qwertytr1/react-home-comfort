import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header__container _container">
      <h1 className="title">
        HOME<span>COMFORT</span>
      </h1>
      <h3 className="total">
        TOTAL: <span>0$</span>{' '}
      </h3>
      <div className="header__burgerMenu"></div>
      <div className="searchAndShoppingBasket">
        <div className={`searchAndShoppingBasket__search ${open ? 'active' : 'inactive'}`}>
          <input
            type="text"
            placeholder="Please enter your text..."
            className={`search-input  ${open ? 'active' : 'inactive'}`}
          />
          <div
            className="search-btn"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <i className="fas fa-search"></i>
          </div>

          <div
            className="cancel-btn"
            onClick={() => {
              setOpen(open);
            }}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="searchAndShoppingBasket__ShoppingBasket">
          <span className="Basket__counter">0</span>
        </div>
      </div>
    </div>
  );
}
export { Header };
