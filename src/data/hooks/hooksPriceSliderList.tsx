import { useState, useEffect } from "react";
import { Products } from "data/data";
export function useChangePriceSliderList(
    dualSliderPrice: {
        minValue: number;
        maxValue: number;
    },
    brandsList: Products[]
) {
    const [dualSliderPriceList, setDualSliderPriceList] = useState<Products[]>([]);
    useEffect(() => {
        if (dualSliderPrice.minValue !== 0 || dualSliderPrice.maxValue !== 5000) {
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
