import React, { useState } from "react";
import { Header } from "./header/index";
import { Footer } from "./footer/index";
import { MainPage } from "./mainPage/index";
import "app/layout/style.css";
function Layout() {
    const [searchValue, setSearchValue] = useState<string>("");
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };
    return (
        <div className="wrapper">
            <header className="header">
                <Header onChangeHandler={onChangeHandler} />
            </header>
            <main className="main">
                <MainPage dataList={searchValue} />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
}
export { Layout };
