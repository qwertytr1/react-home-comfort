import React, { useState } from "react";
import { SortedBy } from "components/sorted element/SortedBy";
import "app/layout/mainPage/style.css";
import { Filter } from "components/sorted element/filter/index";
import { Products } from "data/data";
import { CardList } from "components/cardlist/cardlist/index";
import { useChangeCheckedCategoriesList } from "data/hooks/hooksCategoriesList";

import { useChangeManufactureCheckedList } from "data/hooks/hooksManufactureList";
import { useChangePriceSlider } from "data/hooks/hooksSliderPrice";
import { useChangeStockSlider } from "data/hooks/hooksSliderStock";
import { useChangeCategoriesList } from "data/hooks/hooksCategoriesData";
import { useChangeManufactureList } from "data/hooks/hooksManufactureData";
import { useChangePriceSliderList } from "data/hooks/hooksPriceSliderList";
import { useChangeStockSliderList } from "data/hooks/hooksStockSliderList";
import { useChangeSortedBy } from "data/hooks/hooksSortedByList";
import { useChangeSearch } from "data/hooks/hooksSearchList";
interface OnChangeCheckboxCallback {
    onChangeStockSlider?: (min: number, max: number) => void;
    onChangePriceSlider?: (min: number, max: number) => void;
    onChangeCategoriesList?: (activeValue: string, checker: boolean) => void;
    onChangeManufacturesList?: (activeValue: string, checker: boolean) => void;
}
interface ListType {
    dataList: string;
}
function MainPage({ dataList }: ListType) {
    const [activeValue, setActiveValue] = useState("auto");

    const { onChangeCategoriesList, checkedCategories } = useChangeCheckedCategoriesList();
    const { onChangeManufacturesList, checkedBrands } = useChangeManufactureCheckedList();
    const { onChangePriceSlider, dualSliderPrice } = useChangePriceSlider();
    const { onChangeStockSlider, dualSliderStock } = useChangeStockSlider();
    const onChangeValueSorted = (value: string) => {
        setActiveValue(value);
    };

    const { categoriesList } = useChangeCategoriesList(checkedCategories);
    const { brandsList } = useChangeManufactureList(categoriesList, checkedBrands);
    const { dualSliderPriceList } = useChangePriceSliderList(dualSliderPrice, brandsList);
    const dualSliderStockList: Products[] = useChangeStockSliderList(dualSliderStock, dualSliderPriceList);
    const sortedList: Products[] = useChangeSortedBy(activeValue, dualSliderStockList); //я так могу пимать или нет ????
    const searchList: Products[] = useChangeSearch(sortedList, dataList);
    console.log(searchList);

    return (
        <>
            <section className="block">
                <SortedBy
                    activeValue={activeValue}
                    setActiveValue={onChangeValueSorted}
                    dualSliderStockList={dualSliderStockList}
                />
            </section>
            <div className="main__page-block main-block">
                <Filter
                    onChangeCategoriesList={onChangeCategoriesList}
                    onChangeManufacturesList={onChangeManufacturesList}
                    onChangePriceSlider={onChangePriceSlider}
                    onChangeStockSlider={onChangeStockSlider}
                />
                <article className="main__block-products block-products">{CardList(searchList)}</article>
            </div>
        </>
    );
}
export { MainPage };
export type { OnChangeCheckboxCallback };
