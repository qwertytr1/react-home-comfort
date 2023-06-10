import { Card } from '../card/card';
import { data } from 'data/data';
import React from 'react';
function CardBlock() {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      return Card(
        data[i][j].img,
        data[i][j].title,
        data[i][j].discountPercentage,
        data[i][j].price,
        data[i][j].brand,
        data[i][j].rating
      );
    }
  }
  return <></>;
}
export { CardBlock };
