import React, { useState } from 'react';
import './price.css';
import ReactSlider from 'react-slider';
function Price(onChangePrice: any) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);
  // const handleChange = (minValue: number, maxValue: number) => {
  //   onChangePrice(minValue, maxValue);
  // };
  return (
    <aside className="main__filter__price-block">
      <h2 className="categories manufacturers">Price</h2>
      <div className="dual-slider">
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
          onChange={([min, max]) => {
            setMin(min);
            setMax(max);
            // handleChange(min, max);
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
export { Price };
