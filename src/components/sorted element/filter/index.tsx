import React from "react";
import { ChooseCategories } from "components/sorted element/Categories/index";
import "./style.css";
import { OnChangeCheckboxCallback } from "app/layout/mainPage/index";
import { ChooseManufacture } from "components/sorted element/manufacture/index";
import { Price } from "components/sorted element/price/index";
import { Stock } from "components/sorted element/stock/index";
function Filter({ onChangeCategoriesList, onChangeManufacturesList }: OnChangeCheckboxCallback) {
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
