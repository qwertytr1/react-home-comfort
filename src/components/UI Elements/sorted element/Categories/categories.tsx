import './categories.css';
import { allCategories } from '../../../../data/data';
import React from 'react';
function Categories() {
  return (
    <aside className="main__filter__categories-block">
      <h2 className="categories">CATEGORIES</h2>
      <div className="main__filter__categories">
        {allCategories.map((name) => (
          <label key={name} className="main__filter-categories-item">
            <input type="checkbox" className="main__filter-categories-checkbox" />
            {name}
          </label>
        ))}
      </div>
    </aside>
  );
}
export { Categories };
