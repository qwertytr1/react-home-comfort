import { useState } from "react";

export function useChangeCheckedCategoriesList() {
    const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

    const onChangeCategoriesList = (name: string, state: boolean) => {
        const checked = state;
        if (checked) {
            setCheckedCategories([...checkedCategories, name]);
        } else {
            setCheckedCategories(checkedCategories.filter(e => e !== name));
        }
    };

    return { onChangeCategoriesList, checkedCategories };
}
