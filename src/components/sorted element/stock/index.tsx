import { MAX_VALUE_STOCK, MIN_DISTANCE_STOCK, MIN_VALUE_STOCK, STEP_STOCK } from "data/const";
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
            minValue={MIN_VALUE_STOCK}
            maxValue={MAX_VALUE_STOCK}
            minDist={MIN_DISTANCE_STOCK}
            step={STEP_STOCK}
        />
    );
}
export { Stock };
