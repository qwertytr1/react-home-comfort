import React from "react";
import { Header } from "./header/index";
import { Footer } from "./footer/index";
import { MainPage } from "./mainPage/index";
import "./style.css";
function Layout() {
    return (
        <div className="wrapper">
            <header className="header">
                <Header />
            </header>
            <main className="main">
                <MainPage />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
export { Layout };
