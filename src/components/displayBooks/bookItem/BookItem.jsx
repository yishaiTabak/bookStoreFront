import React from "react";
import { useNavigate } from "react-router-dom";
import ShowPrice from "../../ShowPrice";
import AddToCartBtn from "../../addToCartBtn/AddToCartBtn";

const BookItem = ({bookDetails}) =>{

    const navigate = useNavigate()
    const onBook = () =>{
        navigate('/books/'+bookDetails._id)
    }
    return (
        <div className="item-container">
            <img className="item-img" onClick={onBook} src={bookDetails.img} alt="" />
            <div className="name-and-author">
                <h3 className="book-name">{bookDetails.name}</h3>
                <p className="author">{bookDetails.author}</p>
            </div>
            <div className="button-and-price-container">
            <ShowPrice price={bookDetails.price} discount={bookDetails.discount} />
            <AddToCartBtn bookDetails={bookDetails} />
            </div>
        </div>
    )
}

export default BookItem