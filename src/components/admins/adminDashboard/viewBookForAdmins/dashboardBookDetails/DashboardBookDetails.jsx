import React from "react";

const DashboardBookDetails =({bookDetails})=>(
    <div className="details">
        <img className="book-img" src={bookDetails.img} alt="" />
        <div className="name-and-price">
          <div className="name-and-author">
            <div className="name">{bookDetails.name}</div>
            <div className="author">{bookDetails.author}</div>
          </div>
          <div className="price">price: {bookDetails.price}$</div>
        </div>
      </div>
)

export default DashboardBookDetails