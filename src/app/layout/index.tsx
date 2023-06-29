import React, { useState } from "react";
import { Header } from "./header/index";
import { Footer } from "./footer/index";
import { MainPage } from "./mainPage/index";
import "app/layout/style.css";
// import { Products } from "data/data";
function Layout() {
    const [productsList, setProductsList] = useState<string>("");
    return (
        <div className="wrapper">
            <header className="header">
                <Header dualSliderStockList={setProductsList} />
            </header>
            <main className="main">
                <MainPage props={productsList} />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
export { Layout };
