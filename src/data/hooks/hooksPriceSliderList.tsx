import { useState, useEffect } from "react";
import { Products } from "data/data";
import { MIN_VALUE_PRICE, MAX_VALUE_PRICE } from "data/const";
export function useChangePriceSliderList(
    dualSliderPrice: {
        minValue: number;
        maxValue: number;
    },
    brandsList: Products[]
) {
    const [dualSliderPriceList, setDualSliderPriceList] = useState<Products[]>([]);
    useEffect(() => {
        if (dualSliderPrice.minValue !== MIN_VALUE_PRICE || dualSliderPrice.maxValue !== MAX_VALUE_PRICE) {
            const price: Products[] = [];
            brandsList.forEach(el => {
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
    return { dualSliderPriceList };
}
