import React, { useState } from "react";
import ReactSlider from "react-slider";
import "UIKit/reactSliderContainer/style.css";

interface DualSliderContainerProps {
    title: string;
    onChangeSlider?: (min: number, max: number) => undefined | void;
    minValue: number;
    maxValue: number;
    minDist: number;
    step: number;
}

function DualSliderContainer({ title, onChangeSlider, minValue, maxValue, minDist, step }: DualSliderContainerProps) {
    const [min, setMin] = useState(minValue);
    const [max, setMax] = useState(maxValue);
    return (
        <aside className="main__filter__dual-slider">
            <h2 className="dual-slider_container_title">{title}</h2>
            <div className="dual-slider stock">
                <ReactSlider
                    defaultValue={[min, max]}
                    className="progressBar"
                    trackClassName="tracker"
                    min={minValue}
                    max={maxValue}
                    minDistance={minDist}
                    step={step}
                    withTracks={true}
                    pearling={true}
                    renderThumb={props => {
                        return <div {...props} className="thumb"></div>;
                    }}
                    renderTrack={props => {
                        return <div {...props} className="track"></div>;
                    }}
                    onChange={([Min, Max]) => {
                        setMin(Min);
                        setMax(Max);
                        onChangeSlider?.(Min, Max);
                    }}
                />
                <div className="dual-slider__min-max-val">
                    <p>
                        Min: <span>{min}</span>
                    </p>
                    <p>
                        Max: <span>{max}</span>
                    </p>
                </div>
            </div>
        </aside>
    );
}
export { DualSliderContainer };
