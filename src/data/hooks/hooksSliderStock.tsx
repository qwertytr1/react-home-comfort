import { useState } from "react";

export function useChangeStockSlider() {
    const [dualSliderStock, setDualSliderStock] = useState({ minValue: 0, maxValue: 150 });

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
