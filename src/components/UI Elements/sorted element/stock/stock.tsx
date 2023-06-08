import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './stock.css';
function Stock() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);
  return (
    <aside className="main__filter__stock">
      <h2 className="categories manufacturers">Stock</h2>
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
          onChange={([min, max]) => {
            setMin(min);
            setMax(max);
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
export { Stock };
