import { allCategories } from "data/data";
import React from "react";
import { CheckboxesContainer } from "UIKit/checkboxesContainer/index";
import { OnChangeCheckboxCallback } from "app/layout/mainPage/index";
function ChooseCategories({ onChangeCategoriesList }: OnChangeCheckboxCallback) {
    return (
        <CheckboxesContainer
            checkboxes={allCategories}
            title="Categories"
            onChangeCheckboxModel={onChangeCategoriesList}
        />
    );
}
export { ChooseCategories };
