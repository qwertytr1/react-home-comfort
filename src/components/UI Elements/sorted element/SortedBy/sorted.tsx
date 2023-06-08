import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import './sortedStyle.css';
function SortedBy() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="main__info-for-users">
        <div className="info-for-users__dropdown-container">
          <h3 className="text-for-dropdown">Sort by</h3>
          <nav className="dropdown">
            <button
              className="dropdown__button "
              onClick={() => {
                setOpen(!open);
              }}
            >
              auto
            </button>
            <ul className={`dropdown__list ${open ? 'drop' : 'inactive'}`}>
              <li className="dropdown__list-item active-sort" data-vale="auto">
                auto
              </li>
              <li className="dropdown__list-item" data-vale="price ASC">
                price ASC
              </li>
              <li className="dropdown__list-item" data-vale="price DESC">
                price DESC
              </li>
              <li className="dropdown__list-item" data-vale="rating ASC">
                rating ASC
              </li>
              <li className="dropdown__list-item" data-vale="rating DESC">
                rating DESC
              </li>
              <li className="dropdown__list-item" data-vale="discount ASC">
                discount ASC
              </li>
              <li className="dropdown__list-item" data-vale="discount DESC">
                discount DESC
              </li>
            </ul>
          </nav>
        </div>

        <span className="found">Found: 0</span>
      </article>
      <article className="main__block-products block-products"></article>
    </>
  );
}
export { SortedBy };
