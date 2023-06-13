import React from 'react';
import { allManufacturers } from '../../../data/data';
import { CheckboxesContainer } from '../../../UIKit/checkboxesContainer/index';
import { onChangeCheckboxCallback } from '../../../app/layout/mainPage/index';
function ChooseManufacture({ onChangeManufacturesList }: onChangeCheckboxCallback) {
  return (
    <CheckboxesContainer
      checkboxes={allManufacturers}
      title="Manufactures"
      onChangeCheckboxModel={onChangeManufacturesList}
    />
  );
}
export { ChooseManufacture };
