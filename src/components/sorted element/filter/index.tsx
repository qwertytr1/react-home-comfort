import React from 'react';
import { ChooseCategories } from '../Categories/index';
import './style.css';
import { onChangeCheckboxCallback } from '../../../app/layout/mainPage/index';
import { ChooseManufacture } from '../manufacture/index';
import { Price } from '../price/index';
import { Stock } from '../stock/index';
function Filter({ onChangeCategoriesList, onChangeManufacturesList }: onChangeCheckboxCallback) {
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
