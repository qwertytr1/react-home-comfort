import { useState, useEffect } from "react";
import { Products } from "data/data";
import { MIN_VALUE_STOCK, MAX_VALUE_STOCK } from "data/const";
export function useChangeStockSliderList(
    dualSliderStock: {
        minValue: number;
        maxValue: number;
    },
    dualSliderPriceList: Products[]
) {
    const [dualSliderStockList, setDualSliderStockList] = useState<Products[]>([]);

    useEffect(() => {
        if (dualSliderStock.minValue !== MIN_VALUE_STOCK || dualSliderStock.maxValue !== MAX_VALUE_STOCK) {
            const stock: Products[] = [];
            dualSliderPriceList.forEach(el => {
                if (el.stock <= dualSliderStock.maxValue && el.stock >= dualSliderStock.minValue) {
                    stock.push(...[el]);
                }
            });
            setDualSliderStockList(stock);
        } else {
            setDualSliderStockList(dualSliderPriceList);
        }
    }, [dualSliderPriceList, dualSliderStock]);
    return { dualSliderStockList };
}
