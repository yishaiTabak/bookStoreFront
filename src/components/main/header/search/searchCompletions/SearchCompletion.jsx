import React from "react";
import { useNavigate } from "react-router-dom";

const SearchCompletions = ({names}) => {
    const navigate = useNavigate()
    const onNameClick = (bookName) => {
        navigate("/search/" + bookName);
        window.location.reload(false);
      };

    return (
    <div className="search-completions">
        {names.map((name) => (
        <div
            key={name}
            className="search-completion"
            onClick={() => onNameClick(name)}
        >
            {name}
        </div>
        ))}
    </div>
    )
}

export default SearchCompletions