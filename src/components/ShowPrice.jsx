import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const ShowPrice = ({price, discount}) =>{
    const {loginState} = useContext(LoginContext)
    const hasDiscount = loginState&& discount !==0
    const discountedPrice =  price * (1 - discount /100);

    return (
        <div className="price">price: {hasDiscount? <del>{price}$</del>:null}{" "}
            {hasDiscount? discountedPrice.toFixed(2): price.toFixed(2)}$
        </div>
    )

}

export default ShowPrice