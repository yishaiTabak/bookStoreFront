import { useEffect, useState } from "react";
import { getBookDetails } from "../../server/booksRequests";
import { useParams } from "react-router-dom";

const useBookDetails = () =>{
    const {id} = useParams()
    const [bookDetails,setBookDetails] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(()=> async ()=>{
        const book = await getBookDetails(id)
        if(!book){
            console.log('404 not found')
        }
        else{
            setBookDetails(book)
        }
        setLoading(false)
    },[id])

    return {bookDetails, loading}
}

export default useBookDetails