import React, { useState } from 'react';
import { SortedBy } from '../UI Elements/sorted element/SortedBy/sorted';
import './StyleForMainPage.css';
import { Filter } from '../UI Elements/sorted element/filter/filter';
import { Card } from '../UI Elements/cardlist/card/card';
// import { CardBlock } from 'components/UI Elements/cardlist/cardlist/cardlist';

function MainPage() {
  // const onChangePrice = (min: number, max: number) => {
  //   const array = [...Array.from(Array(max - min + 1).keys(), (x) => x + min)];
  //   console.log(array);
  // };
  const [CategoriesList, SetCategoriesList] = useState<any[]>([]);
  const onChangeCategoriesList = (name: any, state: any) => {
    const checked = state;
    if (checked) {
      SetCategoriesList([...CategoriesList, name]);
    } else {
      SetCategoriesList(CategoriesList.filter((e) => e !== name));
    }
  };
  const [ManufactureList, SetManufacturesList] = useState<any[]>([]);
  const onChangeManufacturesList = (name: any, state: any) => {
    const checked = state;
    if (checked) {
      SetManufacturesList([...ManufactureList, name]);
    } else {
      SetManufacturesList(ManufactureList.filter((e) => e !== name));
    }
  };
  console.log(CategoriesList);
  console.log(ManufactureList);
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
