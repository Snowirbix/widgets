import React, { useState } from "react";
import { items } from "./AccordionData";

const Accordion = () => {
    const [active, setActive] = useState(undefined);

    return items.map((item, index) => (<Item {...item} onClick={() => setActive(index)} active={index == active} />));
}

export default Accordion;

const Item = ({ title, content, onClick, active }) => {
    return (
        <div className="ui accordion">
            <div className={`title ${active && "active"}`} onClick={onClick}>{title}</div>
            <div className={`content ${active && "active"}`}>{content}</div>
        </div>
    );
}
