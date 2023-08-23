import React, { createContext, useEffect, useState } from "react";
import { getBooksFromDB } from "../server/booksRequests";
import Loader from "../components/Loader/Loader";

export const BooksContext = createContext()

const BooksContextProvider = (props) =>{
    const [allBooks, setAllBooks] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect( () => async()=>{
        try{
        const {books} = await getBooksFromDB(0,'',1000)
        setAllBooks(books)
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    },[])

    return (
        loading? <Loader /> :
        <BooksContext.Provider value={{allBooks, setAllBooks}}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider