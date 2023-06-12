import React from 'react';
import './manufacture.css';
import { allManufacturers } from '../../../../data/data';
// console.log(data);
function ChooseManufacture({ onChangeManufacturesList }: any) {
  const handlerChange = (event: any) => {
    onChangeManufacturesList(event.target.value, event.target.checked);
  };
  return (
    <aside className="main__filter__manufactures-block">
      <h2 className="categories manufacturers">Manufacturers</h2>
      <div className="main__filter__manufacturers">
        <div className="main__filter__categories __manufacturers">
          {allManufacturers.map((name) => (
            <label key={name} className="main__filter-categories-item">
              <>
                <input
                  type="checkbox"
                  className="main__filter-categories-checkbox"
                  onChange={handlerChange}
                  value={name}
                />
                {name}
              </>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
export { ChooseManufacture };
