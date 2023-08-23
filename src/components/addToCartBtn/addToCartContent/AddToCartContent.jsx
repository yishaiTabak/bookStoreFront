import { faBagShopping, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddToCartContent = ({isBookInCart, onToCheckOut, onAddToCart}) =>(
    isBookInCart ? (
    <button className="to-checkout" onClick={onToCheckOut}>
        to checkout <FontAwesomeIcon icon={faBagShopping} bounce />
    </button>
    ) : (
    <button className="add-to-cart" onClick={onAddToCart}>
        add to cart <FontAwesomeIcon icon={faCartShopping} />
    </button>
    )
)

export default AddToCartContent