import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  removeFromCart
} from "../../../localStorage/cart";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";
import { saveUserCart } from "../../../userCart/userCart";
import CartItemContent from "./cartItemContent/CartItemContent";

const CartItem = ({cartItemDetails}) => {
  const { loginState } = useContext(LoginContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const onBook = () => {
    navigate("/books/" + cartItemDetails._id);
  };

  const onDelete = () => {
    const newCartItems = cartItems.filter(
      (item) => item._id !== cartItemDetails._id
    );
    setCartItems(newCartItems);
    loginState
      ? saveUserCart(loginState, newCartItems)
      : removeFromCart(cartItemDetails);
  };

  return (
    <CartItemContent cartItemDetails={cartItemDetails} onDelete={onDelete} onBook={onBook} />
  );
};

export default CartItem;
