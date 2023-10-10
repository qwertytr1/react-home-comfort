import { useState } from "react";

export function useChangePriceSlider() {
    const [dualSliderPrice, setDualSliderPrice] = useState({ minValue: 0, maxValue: 3000 });

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
