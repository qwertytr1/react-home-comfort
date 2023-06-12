import './categories.css';
import { allCategories, Beds, Dressers, Tables } from '../../../../data/data';
import React, { useState } from 'react';

function ChooseCategories({ onChangeCategoriesList }: any) {
  const handleChange = (event: any) => {
    onChangeCategoriesList(event.target.value, event.target.checked);
  };
  return (
    <aside className="main__filter__categories-block">
      <h2 className="categories">CATEGORIES</h2>
      <div className="main__filter__categories">
        {allCategories.map((name) => (
          <label key={name} className="main__filter-categories-item">
            <input
              type="checkbox"
              className="main__filter-categories-checkbox"
              onChange={handleChange}
              value={name}
            />
            {name}
          </label>
        ))}
      </div>
    </aside>
  );
}
export { ChooseCategories };
