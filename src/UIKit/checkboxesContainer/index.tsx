import React from "react";
import "./style.css";

interface CheckboxesContainerProps {
    title: string;
    checkboxes: string[];
    onChangeCheckboxModel?: (value: string, checker: boolean) => void;
}

function CheckboxesContainer({ title, checkboxes, onChangeCheckboxModel }: CheckboxesContainerProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeCheckboxModel?.(event.target.value, event.target.checked);
    };

    return (
        <aside className="main__filter-block">
            <h2 className="filtersTitle">{title}</h2>
            <div className="main__filters-container">
                {checkboxes.map((name) => (
                    <label key={name} className="main__filter-item">
                        <input type="checkbox" className="main__filter-checkbox" onChange={handleChange} value={name} />
                        {name}
                    </label>
                ))}
            </div>
        </aside>
    );
}
export { CheckboxesContainer };
