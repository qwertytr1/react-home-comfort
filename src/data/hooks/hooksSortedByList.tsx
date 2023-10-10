import { useState, useEffect } from "react";
import { Products } from "data/data";
export function useChangeSortedBy(activeValue: string, dualSliderStockList: Products[]) {
    const [sortedList, setSortedList] = useState<Products[]>([]);

    useEffect(() => {
        const sortList = [...dualSliderStockList];
        let ProductsList: Products[] = [];
        switch (activeValue) {
            case "auto":
                ProductsList = dualSliderStockList;
                break;
            case "price ASC":
                ProductsList = sortList.sort((a, b) => {
                    return parseInt(b.price) - parseInt(a.price);
                });
                break;
            case "price DESC":
                ProductsList = sortList.sort((a, b) => {
                    return parseInt(a.price) - parseInt(b.price);
                });
                break;
            case "rating ASC":
                ProductsList = sortList.sort((a, b) => {
                    return Number(b.rating) - Number(a.rating);
                });
                break;
            case "rating DESC":
                ProductsList = sortList.sort((a, b) => {
                    return Number(a.rating) - Number(b.rating);
                });
                break;
            case "discount ASC":
                ProductsList = sortList.sort((a, b) => {
                    return parseInt(b.discountPercentage) - parseInt(a.discountPercentage);
                });
                break;
            case "discount DESC":
                ProductsList = sortList.sort((a, b) => {
                    return parseInt(a.discountPercentage) - parseInt(b.discountPercentage);
                });
                break;
        }
        setSortedList([...ProductsList]);
    }, [activeValue, dualSliderStockList]);
    return { sortedList };
}
