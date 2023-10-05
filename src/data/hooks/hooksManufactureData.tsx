import { useState, useEffect } from "react";
import { Products } from "data/data";
export function useChangeManufactureList(categoriesList: Products[], checkedBrands: string[]) {
    const [brandsList, setBrandsList] = useState<Products[]>([]);
    useEffect(() => {
        if (checkedBrands.length) {
            const manufactures: Products[] = [];
            checkedBrands.forEach(element => {
                const manufacture = categoriesList.filter(el => el.brand === element);
                manufactures.push(...manufacture);
            });
            setBrandsList(manufactures);
        } else {
            setBrandsList(categoriesList);
        }
    }, [categoriesList, checkedBrands]);

    return { brandsList };
}
