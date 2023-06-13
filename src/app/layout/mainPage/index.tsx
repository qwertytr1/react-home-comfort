import React, { useState } from 'react';
import { SortedBy } from '../../../components/sorted element/SortedBy';
import './style.css';
import { Filter } from '../../../components/sorted element/filter/index';
interface onChangeCheckboxCallback {
  onChangeCategoriesList?: (value: string, checker: boolean) => void;
  onChangeManufacturesList?: (value: string, checker: boolean) => void;
}
function MainPage() {
  const [CategoriesList, SetCategoriesList] = useState<string[]>([]);
  const onChangeCategoriesList = (name: string, state: boolean) => {
    const checked = state;
    if (checked) {
      SetCategoriesList([...CategoriesList, name]);
    } else {
      SetCategoriesList(CategoriesList.filter((e) => e !== name));
    }
  };
  const [ManufactureList, SetManufacturesList] = useState<string[]>([]);
  const onChangeManufacturesList = (name: string, state: boolean) => {
    const checked = state;
    if (checked) {
      SetManufacturesList([...ManufactureList, name]);
    } else {
      SetManufacturesList(ManufactureList.filter((e) => e !== name));
    }
  };
  return (
    <>
      <section className="block">
        <SortedBy />
      </section>
      <Filter
        onChangeCategoriesList={onChangeCategoriesList}
        onChangeManufacturesList={onChangeManufacturesList}
      />
      <article className="main__block-products block-products">{/* <CardBlock /> */}</article>
    </>
  );
}
export { MainPage };
export type { onChangeCheckboxCallback };
