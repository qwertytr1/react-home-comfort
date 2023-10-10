import { useState, useEffect } from "react";
import { data, Products } from "data/data";
import { getAllCategories, transformCategories } from "data/creationDataObject";
export function useChangeCategoriesList(checkedCategories: string[]) {
    const [categoriesList, setCategoriesList] = useState<Products[]>([]);
    useEffect(() => {
        const transformedCategories = transformCategories(data);
        const allCategories = getAllCategories(data);
        const categories: Products[] = [];
        if (checkedCategories.length) {
            checkedCategories.forEach(element => {
                categories.push(...transformedCategories[element]);
            });
        } else {
            allCategories.forEach(element => {
                categories.push(...transformedCategories[element]);
            });
        }
        setCategoriesList(categories);
    }, [checkedCategories]);
    return { categoriesList };
}
