import React, { useContext } from "react";
import { LoginContext } from "../../../../../context/LoginContext";
import { CartContext } from "../../../../../context/CartContext";
import { saveUserCart } from "../../../../../userCart/userCart";
import { saveCartOnLocalStorage } from "../../../../../localStorage/cart";

const CartQuantity = ({cartItemDetails}) =>{
    const { loginState } = useContext(LoginContext);
    const { cartItems, setCartItems } = useContext(CartContext);

    const onQuantity = (isPlus) => {
        isPlus ? cartItemDetails.quantity++ : cartItemDetails.quantity--;
        setCartItems([...cartItems]);
        loginState
          ? saveUserCart(loginState, cartItems)
          : saveCartOnLocalStorage(cartItems);
      };
    return (
        <div className="quantity-container">
            quantity:
            <button
            disabled={cartItemDetails.quantity === 1}
            className="minus"
            onClick={() => onQuantity(false)}
            >
            -
            </button>
            <div className="quantity">{cartItemDetails.quantity}</div>
            <button
            disabled={cartItemDetails.quantity === 10}
            className="plus"
            onClick={() => onQuantity(true)}
            >
            +
            </button>
        </div>
    )
}

export default CartQuantity