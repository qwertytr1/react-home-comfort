import React, { useState } from "react";
import ReactSlider from "react-slider";
import "UIKit/reactSliderContainer/style.css";

interface DualSliderContainerProps {
    title: string;
}

function DualSliderContainer({ title }: DualSliderContainerProps) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(5000);
    return (
        <aside className="main__filter__dual-slider">
            <h2 className="dual-slider_container_title">{title}</h2>
            <div className="dual-slider stock">
                <ReactSlider
                    defaultValue={[min, max]}
                    className="progressBar"
                    trackClassName="tracker"
                    min={0}
                    max={5000}
                    minDistance={250}
                    step={50}
                    withTracks={true}
                    pearling={true}
                    renderThumb={(props) => {
                        return <div {...props} className="thumb"></div>;
                    }}
                    renderTrack={(props) => {
                        return <div {...props} className="track"></div>;
                    }}
                    onChange={([Min, Max]) => {
                        setMin(Min);
                        setMax(Max);
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
