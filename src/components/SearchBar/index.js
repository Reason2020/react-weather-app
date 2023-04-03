import { useState } from 'react';
import "./SearchBar.css";

const SearchBar = ({ setCity }) => {
    const [searchString, setSearchString] = useState('');

    function onSubmit(e) {
        e.preventDefault(); //prevents reloading when submitting

        setCity(searchString);
        // console.log(searchString);
    }

    return (
        <form className="search-bar" onSubmit={onSubmit} >
            <input placeholder="Search weather by city..." onChange={(e) => setSearchString(e.target.value)} />
            <button>Search</button>
        </form>
    )
}

export default SearchBar;