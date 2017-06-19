import React from "react";

const SearchBar = ({data, handleChange}) => {
    return (
        <div className="search-bar">
            <form onSubmit={handleChange.bind(this)}>
                <label>
                    Find city:
                    <input className="input-city" type="text" />
                </label>
                <button type="button" > Find </button>
            </form>
        </div>
    );
};

export default SearchBar;