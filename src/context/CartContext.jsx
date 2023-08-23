import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";
import { getUserCart } from "../server/cartsRequests";
import { getBookDetails } from "../server/booksRequests";
import { saveCartOnLocalStorage } from "../localStorage/cart";
import Loader from "../components/Loader/Loader";

export const CartContext = createContext()

const CartContextProvider = (props) =>{
    const {loginState} = useContext(LoginContext)

    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    const fetchAndEnhanceCartItems = async (parsedCartItems) => {
        const promises = parsedCartItems.map(async (book) => {
            try {
                const bookDetails = await getBookDetails(book._id);
                if (bookDetails !== null) {
                    return { ...bookDetails, quantity: book.quantity };
                } else {
                    return null;
                }
            } catch (error) {
                return null;
            }
        });

        const enhancedCartItems = await Promise.all(promises);
        return enhancedCartItems.filter(item => item !== null);
    };

    useEffect(()=>{
        const fetchCartItems = async () => {
            try {
                if(loginState) {
                    const cartData =  await getUserCart(loginState.token)
                    console.log(cartData)
                    setCartItems(cartData);
                } else{
                    const storedCartItems = localStorage.getItem('cartItems');
                    const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
                    const cartAfterFiltering = await fetchAndEnhanceCartItems(parsedCartItems);

                    setCartItems(cartAfterFiltering);
                saveCartOnLocalStorage(cartAfterFiltering)
                }
            } catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }
        fetchCartItems()
    },[loginState])
    
    return (
        loading? <Loader /> :
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider