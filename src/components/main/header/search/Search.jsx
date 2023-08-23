import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchCompletions from "./searchCompletions/SearchCompletion";

const Search = ({bookNames}) =>{
    const [autoCompleteNames, setAutoCompleteNames] = useState([]);

    const navigate = useNavigate();
    const onSearch = () => (event) => {
      if (event.key === "Enter") {
        const searchValue = event.target.value.trim().toLowerCase();
        navigate("/search/" + searchValue);
        window.location.reload(false);
      }
    };

    const onSearchInput = (event) => {
        const searchValue = event.target.value.trim().toLowerCase();
        if (searchValue === "") {
          setAutoCompleteNames([]);
          return;
        }
        const newAutoComplete = [];
        for (let name of bookNames) {
          if (newAutoComplete.length === 6) break;
          if (name.includes(searchValue)) newAutoComplete.push(name);
        }
        setAutoCompleteNames(newAutoComplete);
      };

    return (
    <div className="search-container">
        <input
        type="text"
        className="search"
        placeholder="search here"
        onKeyDown={onSearch()}
        onChange={onSearchInput}
        />
        {autoCompleteNames.length !== 0 && 
        <SearchCompletions names={autoCompleteNames} />}
    </div>
    )
}

export default Search