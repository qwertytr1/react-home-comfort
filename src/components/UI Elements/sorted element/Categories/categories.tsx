import './categories.css';
import { allCategories } from '../../../../../assets/data/data';
import React from 'react';
console.log(allCategories);
// function naming() {
//   allCategories.forEach((name) => {
//     `<label className=''="main__filter-categories-item">
//       <input type="checkbox" className="main__filter-categories-checkbox" />${name}
//     </label>`;
//   });
// }
function Categories() {
  return (
    <aside className="main__filter__categories-block">
      <h2 className="categories">CATEGORIES</h2>
      <div className="main__filter__categories">
        <>`${name}`</>
      </div>
    </aside>
  );
}
export { Categories };
