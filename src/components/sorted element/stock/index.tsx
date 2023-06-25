import React from "react";
import { DualSliderContainer } from "UIKit/reactSliderContainer/index";
interface OnChangeInterface {
    onChangeStockSlider?: (min: number, max: number) => void;
}
function Stock({ onChangeStockSlider }: OnChangeInterface) {
    return (
        <DualSliderContainer
            title="Stock"
            onChangeSlider={onChangeStockSlider}
            minValue={0}
            maxValue={150}
            minDist={5}
            step={5}
        />
    );
}
export { Stock };
