import React from "react";

const Searchbar = ({ value, setValue, loading }) => {
    return (
        <div className={`ui icon input ${loading && "loading"}`}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <i class="search icon"></i>
        </div>
    );
}

export default Searchbar;
