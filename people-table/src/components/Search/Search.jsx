import "./Search.css";

function Search({ filterArrayByKeyword }) {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                name="search"
                placeholder="Enter keyword"
                onChange={(e) => {
                    filterArrayByKeyword(e.target.value);
                }}
            />
        </div>
    );
}

export default Search;
