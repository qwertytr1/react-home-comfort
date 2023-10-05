import { useState, useEffect } from "react";
import { Products } from "data/data";
export function useChangeStockSliderList(
    dualSliderStock: {
        minValue: number;
        maxValue: number;
    },
    dualSliderPriceList: Products[]
) {
    const [dualSliderStockList, setDualSliderStockList] = useState<Products[]>([]);

    useEffect(() => {
        if (dualSliderStock.minValue !== 0 || dualSliderStock.maxValue !== 150) {
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
    return dualSliderStockList;
}
