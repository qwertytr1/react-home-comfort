import React from "react";
import { allManufacturers } from "data/data";
import { CheckboxesContainer } from "UIKit/checkboxesContainer/index";
import { OnChangeCheckboxCallback } from "app/layout/mainPage/index";
function ChooseManufacture({ onChangeManufacturesList }: OnChangeCheckboxCallback) {
    return (
        <CheckboxesContainer
            checkboxes={allManufacturers}
            title="Manufactures"
            onChangeCheckboxModel={onChangeManufacturesList}
        />
    );
}
export { ChooseManufacture };
