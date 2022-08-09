import React, { useEffect, useRef, useState, useMemo } from "react";
import fetchWikipedia from "../api/fetchWikipedia";
import Searchbar from "../components/Searchbar/Searchbar";
import SearchList from "../components/SearchList/SearchList";

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(args);
        }, timeout);
    };
}

const SearchListPage = () => {
    const [value, setValue] = useState("");
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [data, setData] = useState([]);
    const mounted = useRef(false);

    const setDebouncedQuery = useMemo(() => debounce((value) => setQuery(value), 1000), [setQuery]);

    useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        }
    });

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await fetchWikipedia(query);
                if (mounted) 
                {
                    setError(undefined);
                    setData(data.query.search);
                }
            }
            catch (e) {
                if (mounted) 
                {
                    setError(e);
                }
            }
            finally {
                if (mounted) 
                {
                    setLoading(false);
                }
            }
        };

        if (mounted && query != "")
        {
            setLoading(true);
            fetch();
        }
            
    }, [query, setData, setError]);

    return (
        <section>
            <h2>Wikipedia search</h2>
            <Searchbar value={value} loading={loading} setValue={(value) => {
                setValue(value);
                setDebouncedQuery(value);
            }} />
            {error ? <div>{error.toString()}</div> : <SearchList data={data} />}
        </section>
    );
}

export default SearchListPage;
