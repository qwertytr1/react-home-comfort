import { Products } from "data/data";
interface CategoriesEntity {
    [key: string]: Products[];
}
export const getAllCategories = (data: Products[][]): string[] => {
    return data.map((elem) => elem[0].category);
};
export const transformCategories = (data: Products[][]) => {
    const categories: string[] = data.map((elem) => elem[0].category);
    const transformData: CategoriesEntity = {} as CategoriesEntity;
    categories.forEach((category) => {
        transformData[category] = data.filter((array) => array[0].category === category).flat();
    });
    return transformData;
};
