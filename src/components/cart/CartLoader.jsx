import React from "react";
import CartContextProvider from "../../context/CartContext";
import CartContainer from "./CartContainer";

const CartLoader = () =>{
    return (
        <CartContextProvider>
            <CartContainer/>
        </CartContextProvider>
    )
}

export default CartLoader