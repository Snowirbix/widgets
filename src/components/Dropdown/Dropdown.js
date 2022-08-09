import React from "react";
import { options } from "./DropdownData"

const Dropdown = () => {
    return (
        <select class="ui dropdown">
            {options.map((option) => <Item {...option} />)}
        </select>
    );
}

const Item = ({ label, value }) => {
    return (
        <option value={value}>{label}</option>
    );
}

export default Dropdown;
