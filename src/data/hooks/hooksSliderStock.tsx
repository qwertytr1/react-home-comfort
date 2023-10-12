import { useState } from "react";
import { MIN_VALUE_STOCK, MAX_VALUE_STOCK } from "data/const";
export function useChangeStockSlider() {
    const [dualSliderStock, setDualSliderStock] = useState({ minValue: MIN_VALUE_STOCK, maxValue: MAX_VALUE_STOCK });

    const onChangeStockSlider = (min: number, max: number) => {
        const ob = {
            minValue: min,
            maxValue: max,
        };
        setDualSliderStock(ob);
    };
    return {
        dualSliderStock,
        onChangeStockSlider,
    };
}
