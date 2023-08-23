import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartItem from "../cartItem/CartItem";

const CartContent = ({totalPrice, onCheckout}) => {
    const { cartItems } = useContext(CartContext);

    return (
    cartItems.length > 0 ? (
        <div className="cart">
          <h1 className="cart-header">Your Shopping Cart</h1>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem._id} cartItemDetails={cartItem} />
            ))}
          </div>
          <div className="total">total: {totalPrice()}$</div>
          <button className="check-out" onClick={onCheckout}>
            check out
          </button>
        </div>
      ) : (
        <h1 className="empty-cart-message">Start shopping and add items to your cart!</h1>
      )
    )
}

export default CartContent