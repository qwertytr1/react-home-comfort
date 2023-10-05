import { useState, useEffect } from "react";
import { Products } from "data/data";
export function useChangeSearch(sortedList: Products[], dataList: string) {
    const [searchList, setSearchList] = useState<Products[]>([]);
    useEffect(() => {
        const search = sortedList.filter(val => val.title.toLowerCase().includes(dataList.toLowerCase()));
        setSearchList(search);
    }, [dataList, sortedList]);
    return searchList;
}
