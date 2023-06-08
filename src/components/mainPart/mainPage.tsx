import React from 'react';
import { SortedBy } from '../UI Elements/sorted element/SortedBy/sorted';
import './StyleForMainPage.css';
import { Filter } from '../UI Elements/sorted element/filter/filter';
import { Card } from '../UI Elements/cardlist/card/card';

function MainPage() {
  return (
    <>
      <section className="block">
        <SortedBy />
      </section>
      <Filter />
      <article className="main__block-products block-products">
        <Card />
      </article>
    </>
  );
}
export { MainPage };
