import { useState, useEffect } from "react";
import { data, Products } from "data/data";
import { useFetchProducts } from "./hooksForData";
export function useChangeCategoriesList(checkedCategories: string[]) {
    const [categoriesList, setCategoriesList] = useState<Products[]>([]);
    const { allCategories, transformedCategories } = useFetchProducts(data);
    useEffect(() => {
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
