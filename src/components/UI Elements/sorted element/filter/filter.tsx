import React from 'react';
import { ChooseCategories } from '../Categories/categories';
import './filter.css';
import { ChooseManufacture } from '../manufacture/manufacture';
import { Price } from '../price/price';
import { Stock } from '../stock/stock';
function Filter({ onChangeCategoriesList, onChangeManufacturesList, onChangePrice }: any) {
  return (
    <div className="main__page-block main-block">
      <div className="main__container _container">
        <section className="main__filter">
          <ChooseCategories onChangeCategoriesList={onChangeCategoriesList} />
          <ChooseManufacture onChangeManufacturesList={onChangeManufacturesList} />
          <Price />
          <Stock />
        </section>
      </div>
    </div>
  );
}
export { Filter };
