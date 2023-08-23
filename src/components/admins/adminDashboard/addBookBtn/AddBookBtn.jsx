import React from "react";

const AddBookBtn = ({setModal}) => (
    <button
        className="add-book"
        onClick={() => setModal()}
        >
        add new book
    </button>
)

export default AddBookBtn