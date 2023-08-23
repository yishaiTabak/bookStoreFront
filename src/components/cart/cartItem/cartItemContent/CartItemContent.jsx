import React from "react";
import ShowPrice from "../../../ShowPrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import CartQuantity from "./cartQuantity/CartQuantity";

const CartItemContent = ({cartItemDetails,onDelete,onBook }) => {

    return (
        <div className="cart-item-container">
      <div className="book-details">
        <img src={cartItemDetails.img} alt="" onClick={onBook} />
        <div className="item-details-container">
          <div className="name-and-author">
            <div className="name">{cartItemDetails.name}</div>
            <div className="author">{cartItemDetails.author}</div>
          </div>
          <div className="price-and-quantity">
            <ShowPrice
              price={cartItemDetails.price}
              discount={cartItemDetails.discount}
            />
            <CartQuantity cartItemDetails={cartItemDetails} />
          </div>
        </div>
      </div>
      <div className="garbage-icon" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
    )
}

export default CartItemContent