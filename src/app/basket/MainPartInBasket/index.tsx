import React from "react";
import { NavLink } from "react-router-dom";
function MainPart() {
    return (
        <div className="main__basket">
            <div className="basket__block">
                <NavLink to="/" className="cancel__product-card cancel__basket"></NavLink>
                <div className="basket__header">
                    <h3 className="basket__title">Product in cart</h3>
                    <span className="items-counter">
                        <span className="items-counter__span">Total Items in the cart: </span>0
                    </span>
                    <div className="basket__page-counter">
                        <div className="page-counter-title">Page: </div>
                        <button className="basket__btn-left">&lt;</button>
                        <input className="basket__page-count" />
                        <button className="basket__btn-right"> &gt;</button>
                    </div>
                </div>
                <div className="basket__products-in-cart">
                    <div className="BasketFree">Please add the product to the cart</div>
                </div>
                <div className="basket__footer">
                    <div className="basket-footer__flex">
                        <div className="basket-footer__input">
                            <input className="basket__input-promo" type="text" placeholder="Enter promo code... " />
                            <p className="basket__example-promo">Promo for test:RS, EPM</p>
                        </div>
                        <div className="basket-footer__data-from-cart">
                            <div className="basket-footer__products">Products: 0</div>
                            <div className="basket-footer__total">Total: 0$</div>
                        </div>
                    </div>
                    <button className="basket-footer__buy-now">buy now</button>
                </div>
            </div>
        </div>
    );
}
export { MainPart };
