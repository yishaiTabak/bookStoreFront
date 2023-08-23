import axios from 'axios';

const URL_SERVER = "http://localhost:5000/"

const sendToken = (token) =>{
    return {headers:{
        Authorization: 'Bearer ' + token
    }}
}
export const getUserCart = async (token) =>{
    try{
        const cart = await axios.get(URL_SERVER + 'carts/get-cart', sendToken(token))
        return cart.data
    } catch(err){
        console.log(err);
        return []
    }
}

export const setUserCart = async(token, cartData) =>{
    try{
    await axios.post(URL_SERVER + 'carts/new', {cartData}, sendToken(token))
    }catch(err){
        console.log(err)
    }
}
export const editUserCart = async(token, cartData) =>{
    try{
    await axios.post(URL_SERVER + 'carts/edit', {cartData}, sendToken(token))
    }catch(err){
        console.log(err)
    }
}
