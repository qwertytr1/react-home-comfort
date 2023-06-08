import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';
import { MainPage } from 'components/mainPart/mainPage';
import './layout.css';
// import Footer from
function Layout() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Outlet />
        <MainPage />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
export { Layout };
