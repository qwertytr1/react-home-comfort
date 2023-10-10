import { MIN_VALUE_PRICE, MAX_VALUE_PRICE } from "data/const";
import { useState } from "react";

export function useChangePriceSlider() {
    const [dualSliderPrice, setDualSliderPrice] = useState({ minValue: MIN_VALUE_PRICE, maxValue: MAX_VALUE_PRICE });

    const onChangePriceSlider = (min: number, max: number) => {
        const ob = {
            minValue: min,
            maxValue: max,
        };
        setDualSliderPrice(ob);
    };
    return {
        dualSliderPrice,
        onChangePriceSlider,
    };
}
