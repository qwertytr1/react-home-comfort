import { getAllCategories, transformCategories } from "data/creationDataObject";
import { Products } from "data/data";

export function useFetchProducts(data: Products[][]) {
    const transformedCategories = transformCategories(data);
    const allCategories = getAllCategories(data);
    return { allCategories, transformedCategories };
}
