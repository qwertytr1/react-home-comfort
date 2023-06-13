import { allCategories, Beds, Dressers, Tables } from '../../../data/data';
import React, { useState } from 'react';
import { CheckboxesContainer } from '../../../UIKit/checkboxesContainer/index';
import { onChangeCheckboxCallback } from '../../../app/layout/mainPage/index';
function ChooseCategories({ onChangeCategoriesList }: onChangeCheckboxCallback) {
  return (
    <CheckboxesContainer
      checkboxes={allCategories}
      title="Manufactures"
      onChangeCheckboxModel={onChangeCategoriesList}
    />
  );
}
export { ChooseCategories };
