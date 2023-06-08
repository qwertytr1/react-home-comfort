import React from 'react';
import { Categories } from '../Categories/categories';
import './filter.css';
import { Manufacture } from '../manufacture/manufacture';
import { Price } from '../price/price';
import { Stock } from '../stock/stock';
function Filter() {
  return (
    <div className="main__page-block main-block">
      <div className="main__container _container">
        <section className="main__filter">
          <Categories />
          <Manufacture />
          <Price />
          <Stock />
        </section>
      </div>
    </div>
  );
}
export { Filter };
