import React, { useEffect, useState } from "react";
import { SortedBy } from "components/sorted element/SortedBy";
import "app/layout/mainPage/style.css";
import { Filter } from "components/sorted element/filter/index";
import { data, Products } from "data/data";
import { getAllCategories, transformCategories } from "data/creationDataObject";

interface OnChangeCheckboxCallback {
    onChangeStockSlider?: (min: number, max: number) => void;
    onChangePriceSlider?: (min: number, max: number) => void;
    onChangeCategoriesList?: (value: string, checker: boolean) => void;
    onChangeManufacturesList?: (value: string, checker: boolean) => void;
}

function MainPage() {
    const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
    const [checkedBrands, setCheckedBrands] = useState<string[]>([]);

    const [dualSliderPrice, setDualSliderPrice] = useState({ minValue: 0, maxValue: 5000 });
    const [dualSliderStock, setDualSliderStock] = useState({ minValue: 0, maxValue: 150 });

    const [brandsList, setBrandsList] = useState<Products[]>([]);
    const [categoriesList, setCategoriesList] = useState<Products[]>([]);
    const [dualSliderPriceList, setDualSliderPriceList] = useState<Products[]>([]);
    const [dualSliderStockList, setDualSliderStockList] = useState<Products[]>([]);

    const onChangeCategoriesList = (name: string, state: boolean) => {
        const checked = state;
        if (checked) {
            setCheckedCategories([...checkedCategories, name]);
        } else {
            setCheckedCategories(checkedCategories.filter((e) => e !== name));
        }
    };

    const onChangeManufacturesList = (name: string, state: boolean) => {
        const checked = state;
        if (checked) {
            setCheckedBrands([...checkedBrands, name]);
        } else {
            setCheckedBrands(checkedBrands.filter((e) => e !== name));
        }
    };
    const onChangePriceSlider = (min: number, max: number) => {
        const ob = {
            minValue: min,
            maxValue: max,
        };
        setDualSliderPrice(ob);
    };

    const onChangeStockSlider = (min: number, max: number) => {
        const ob = {
            minValue: min,
            maxValue: max,
        };
        setDualSliderStock(ob);
    };

    useEffect(() => {
        const transformedCategories = transformCategories(data);
        const allCategories = getAllCategories(data);
        const categories: Products[] = [];
        if (checkedCategories.length) {
            checkedCategories.forEach((element) => {
                categories.push(...transformedCategories[element]);
            });
        } else {
            allCategories.forEach((element) => {
                categories.push(...transformedCategories[element]);
            });
        }
        setCategoriesList(categories);
    }, [checkedCategories]);

    useEffect(() => {
        if (checkedBrands.length) {
            const manufactures: Products[] = [];
            checkedBrands.forEach((element) => {
                const manufacture = categoriesList.filter((el) => el.brand === element);
                manufactures.push(...manufacture);
            });
            setBrandsList(manufactures);
        } else {
            setBrandsList(categoriesList);
        }
    }, [categoriesList, checkedBrands]);

    useEffect(() => {
        if (dualSliderPrice.minValue !== 0 || dualSliderPrice.maxValue !== 5000) {
            const price: Products[] = [];
            brandsList.forEach((el) => {
                const a = Number(el.price.slice(0, -1));
                if (a <= dualSliderPrice.maxValue && a >= dualSliderPrice.minValue) {
                    price.push(...[el]);
                }
            });
            setDualSliderPriceList(price);
        } else {
            setDualSliderPriceList(brandsList);
        }
    }, [brandsList, dualSliderPrice]);

    useEffect(() => {
        if (dualSliderStock.minValue !== 0 || dualSliderStock.maxValue !== 150) {
            const stock: Products[] = [];
            dualSliderPriceList.forEach((el) => {
                if (el.stock <= dualSliderStock.maxValue && el.stock >= dualSliderStock.minValue) {
                    stock.push(...[el]);
                }
            });
            setDualSliderStockList(stock);
        } else {
            setDualSliderStockList(dualSliderPriceList);
        }
    }, [dualSliderPriceList, dualSliderStock]);

    return (
        <>
            <section className="block">
                <SortedBy />
            </section>
            <Filter
                onChangeCategoriesList={onChangeCategoriesList}
                onChangeManufacturesList={onChangeManufacturesList}
                onChangePriceSlider={onChangePriceSlider}
                onChangeStockSlider={onChangeStockSlider}
            />
            <article className="main__block-products block-products">{/* <CardBlock /> */}</article>
        </>
    );
}
export { MainPage };
export type { OnChangeCheckboxCallback };
