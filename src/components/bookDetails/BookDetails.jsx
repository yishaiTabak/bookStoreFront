import React from "react";
import ShowPrice from "../ShowPrice";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
import Loader from "../Loader/Loader";
import useBookDetails from "./useBookDetails";

const BookDetails = () =>{
    const {bookDetails, loading} = useBookDetails()

    return (
        loading? <Loader />:
         <div className="book-details-page">
            <div className="book-details-container">
                <div className="img-and-general-details">
                <img src={bookDetails.img} alt="" />
                <div className="general-details">
                    <div className="name-and-author">
                        <div className="name">{bookDetails.name}</div>
                        <div className="author">{bookDetails.author}</div>
                    </div>
                    <div className="price-and-buy">
                        <ShowPrice price={bookDetails.price} discount={bookDetails.discount} />
                        <div className="add-to-cart-btn"><AddToCartBtn bookDetails={bookDetails} /></div>
                    </div>
                </div>
                </div>
                <div className="description-container">
                    <h2 className="description-header">Description</h2>
                    <div className="description">{bookDetails.description}</div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails