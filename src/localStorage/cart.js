export const saveCartOnLocalStorage=(cartItems)=>{
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const addToCart=(book)=>{
    const storedCartItems = localStorage.getItem('cartItems');
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    for(let item of cartItems){
        if(item._id === book._id)
            return
    }
    
    cartItems.push({...book, quantity:1})

    saveCartOnLocalStorage(cartItems)
}

export const removeFromCart =(bookToRemove) =>{
    const storedCartItems = localStorage.getItem('cartItems');
    const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    const updatedCartItems = cartItems.filter(item => item._id !== bookToRemove._id)

    saveCartOnLocalStorage(updatedCartItems)
}
