import React from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import SearchList from "../components/SearchList/SearchList";

const SearchListPage = () => {
    return (
        <section>
            <Searchbar />
            <SearchList />
        </section>
    );
}

export default SearchListPage;
