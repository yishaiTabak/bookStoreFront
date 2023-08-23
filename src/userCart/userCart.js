import { saveCartOnLocalStorage } from "../localStorage/cart"
import { getUserCart, setUserCart } from "../server/cartsRequests"


export const handleCartOnLogin = async (userData,cartItems,setCartItems) =>{
    saveCartOnLocalStorage([])
    const userCart = await getUserCart(userData.token)
    if(userCart.length === 0 && cartItems.length>0) {
        await setUserCart(userData.token, cartItems.map(book => ({book:book._id, quantity:book.quantity})))
    }
    if(userCart.length>0){
        setCartItems(userCart)
    }
}

export const saveUserCart = async(loginState,cartItems)=>{
    
    await setUserCart(loginState.token, cartItems.map(book => ({book:book._id, quantity:book.quantity})))
}

