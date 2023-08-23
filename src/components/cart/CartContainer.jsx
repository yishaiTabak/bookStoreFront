import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { LoginContext } from "../../context/LoginContext";
import { saveUserCart } from "../../userCart/userCart";
import { saveCartOnLocalStorage } from "../../localStorage/cart";
import CheckoutModal from "./checkoutModal/CheckoutModal";
import CartContent from "./cartContent/cartContent";

const CartContainer = () => {
  const { loginState } = useContext(LoginContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isCheckoutModal, setIsCheckoutModal] = useState(false);

  const totalPrice = () => {
    let sum = 0;
    for (let item of cartItems) {
      const hasDiscount = loginState && item.discount !== 0;
      const discountedPrice =
        Math.round(100 * item.price * (1 - item.discount / 100)) / 100;
      const realPrice = hasDiscount ? discountedPrice : item.price;
      sum += realPrice * item.quantity;
    }
    return sum.toFixed(2);
  };

  const onCheckout = async () => {
    loginState
      ? await saveUserCart(loginState, [])
      : saveCartOnLocalStorage([]);
    setCartItems([]);
    setIsCheckoutModal(true);
  };

  return (
    <div className="cart-container">
      <CartContent totalPrice={totalPrice} onCheckout={onCheckout} />
      {isCheckoutModal && (<CheckoutModal setIsCheckoutModal={setIsCheckoutModal}/>)}
    </div>
  );
};

export default CartContainer;
