import React from "react";

const SearchList = ({ data }) => {
    return (
        <ul>
            {data.map(item => (
                <Item key={item.pageid} {...item} />
            ))}
        </ul>
    );
}

const Item = ({title, snippet, pageid}) => {
    return (
        <li className="row">
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: snippet }} />
            <a href={`https://en.wikipedia.org/?curid=${pageid}`} target="_blank">Go</a>
        </li>
    )
}

export default SearchList;
