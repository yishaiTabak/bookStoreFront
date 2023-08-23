import axios from "axios"

const URL_SERVER = "http://localhost:5000/"

const sendToken = (token) =>{
    return {headers:{
        Authorization: 'Bearer ' + token
    }}
}

export const getBooksFromDB = async (skip,search='',limit=6) =>{
    try{
        const res = await axios.get(URL_SERVER + 'books/get-books',{params:{skip,search,limit}})
        return res.data
    }catch(err){
        return null
    }
}

export const getBookDetails = async(id) =>{
    try{
    const res = await axios.get(URL_SERVER + 'books/get-book/'+id)
    return res.data
    } catch(err){
        return null
    }
}

export const editBook = async (updates, token, id) =>{
    try{
        const res = await axios.patch(URL_SERVER + 'books/edit/'+id, updates,sendToken(token))
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const deleteBook = async (token, id) =>{
    try{
        await axios.delete(URL_SERVER + 'books/delete/'+id,sendToken(token))
    }
    catch(err){
        console.log(err)
    }
}

export const newBook = async (bookData, token) =>{
    try{
        const res = await axios.post(URL_SERVER + 'books/new', bookData, sendToken(token))
        return res.data
    } catch(err){
        console.log(err)
    }
}

export const getAllBookNames = async()=> {
    const res = await axios.get(URL_SERVER + 'books/get-all-names')
    return res.data
}