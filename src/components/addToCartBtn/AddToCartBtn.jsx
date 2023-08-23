import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addToCart } from "../../localStorage/cart";
import { useNavigate } from "react-router-dom";
import { saveUserCart } from "../../userCart/userCart";
import { LoginContext } from "../../context/LoginContext";
import AddToCartContent from "./addToCartContent/AddToCartContent";

const AddToCartBtn = ({ bookDetails }) => {
  const { loginState } = useContext(LoginContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const isBookInCart = cartItems.some((book) => book._id === bookDetails._id);
  const navigate = useNavigate();
  const onToCheckOut = () => {
    navigate("/cart");
  };

  const onAddToCart = () => {
    const newCartItems = [...cartItems, { ...bookDetails, quantity: 1 }];
    loginState
      ? saveUserCart(loginState, newCartItems)
      : addToCart(bookDetails);
    setCartItems(newCartItems);
  };

  return <AddToCartContent isBookInCart={isBookInCart} onToCheckOut={onToCheckOut} onAddToCart={onAddToCart} />
};

export default AddToCartBtn;
