import { MAX_VALUE_PRICE, MIN_DISTANCE_PRICE, MIN_VALUE_PRICE, STEP_PRICE } from "data/const";
import React from "react";
import { DualSliderContainer } from "UIKit/reactSliderContainer/index";
interface OnChangeInterface {
    onChangePriceSlider?: (min: number, max: number) => void;
}
function Price({ onChangePriceSlider }: OnChangeInterface) {
    return (
        <DualSliderContainer
            title="Price"
            onChangeSlider={onChangePriceSlider}
            minValue={MIN_VALUE_PRICE}
            maxValue={MAX_VALUE_PRICE}
            minDist={MIN_DISTANCE_PRICE}
            step={STEP_PRICE}
        />
    );
}
export { Price };
