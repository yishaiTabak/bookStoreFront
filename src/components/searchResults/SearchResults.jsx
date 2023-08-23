import React from "react";
import { useParams } from "react-router-dom";
import DisplayBooks from "../displayBooks/DisplayBooks";


const SearchResults = () => {
    const {searchValue} = useParams()
    return (
        <DisplayBooks searchValue={searchValue} header="search results:"/>
    )
}

export default SearchResults