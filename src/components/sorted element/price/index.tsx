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
            minValue={0}
            maxValue={3000}
            minDist={250}
            step={50}
        />
    );
}
export { Price };
