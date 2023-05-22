import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
function Header() {
  return (
    <div className="header__container _container">
      <h1 className="title">
        HOME<span>COMFORT</span>
      </h1>
      <div className="header__burgerMenu"></div>
      <div className="searchAndShoppingBasket">
        <div className="searchAndShoppingBasket__search">
          <input type="text" placeholder="Please enter your text..." className="search-input" />
          <div className="search-btn">
            <i className="fas fa-search"></i>
          </div>

          <div className="cancel-btn">
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
