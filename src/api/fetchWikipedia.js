const fetchWikipedia = async (query) => {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}`);
    const data = await response.json();
    return data;
}

export default fetchWikipedia;
