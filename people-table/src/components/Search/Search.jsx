import { useRef } from "react";
import "./Search.css";

function Search() {
    const searchInput = useRef("");

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                name="search"
                placeholder="Enter keyword"
                ref={searchInput}
            />
        </div>
    );
}

export default Search;
