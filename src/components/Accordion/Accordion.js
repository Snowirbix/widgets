import React, { useState } from "react";
import { items } from "./AccordionData";

const Accordion = () => {
    const [active, setActive] = useState(undefined);

    return items.map((item, index) => (<Item {...item} collapse={index != active} />));
}

export default Accordion;

const Item = ({ title, content, collapse }) => {
    return (
        <>
            <div>{title}</div>
            {!collapse && (<div>{content}</div>)}
        </>
    );
}