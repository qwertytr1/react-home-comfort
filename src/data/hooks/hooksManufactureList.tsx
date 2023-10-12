import { useState } from "react";
export function useChangeManufactureCheckedList() {
    const [checkedBrands, setCheckedBrands] = useState<string[]>([]);
    const onChangeManufacturesList = (name: string, state: boolean) => {
        const checked = state;
        if (checked) {
            setCheckedBrands([...checkedBrands, name]);
        } else {
            setCheckedBrands(checkedBrands.filter(e => e !== name));
        }
    };
    return { onChangeManufacturesList, checkedBrands };
}
