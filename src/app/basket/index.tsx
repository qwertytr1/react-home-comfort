import React from "react";
import { Header } from "app/layout/header/index";
import { Footer } from "app/layout/footer/index";
import "./style.css";
import { MainPart } from "app/basket/MainPartInBasket/index";
function Basket() {
    return (
        <div className="wrapper">
            <header className="header">
                <Header />
            </header>
            <main className="main">
                <MainPart />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
export { Basket };
