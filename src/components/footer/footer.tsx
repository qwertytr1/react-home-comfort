import React from 'react';
import './footer.css';
function Footer() {
  return (
    <section className="footer__container _container">
      <h1 className="footer__title">
        HOME<span>COMFORT</span>
      </h1>

      <span className="footer__icons-year">©2022</span>

      <div className="footer__icons-gitAndCourse">
        <a href="https://rs.school/js/" className="icon">
          <div className="footer__iconsCourse icon"></div>
        </a>
        <a href="https://github.com/qwertytr1" className="icon">
          <div className="footer__iconsGit-second icon"></div>
        </a>
      </div>
    </section>
  );
}
export { Footer };
