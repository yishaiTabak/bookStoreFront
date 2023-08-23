import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/main/home/Home";
import Login from "../components/login/Login";
import SignUp from "../components/SignUp/SignUp";
import SearchResults from "../components/searchResults/SearchResults";
import BookDetails from "../components/bookDetails/BookDetails";
import MyAccount from "../components/my-account/MyAccount";
import Header from "../components/main/header/Header";
import WrongPages from "../components/wrongPages/WrongPages";
import { LoginContext } from "../context/LoginContext";
import CartContextProvider from "../context/CartContext";
import CartContainer from "../components/cart/CartContainer";

const UserRoutes = () =>{
    const {loginState} = useContext(LoginContext)
    return(
        <>
            <CartContextProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/login" element={<Login/>}  />
                    <Route path="/sign-up" element={<SignUp/>} />
                    <Route path="/search/:searchValue" element={<SearchResults/>}/>
                    <Route path="/cart" element={<CartContainer/>} />
                    <Route path="/books/:id" element={<BookDetails />}/>
                    <Route path="/accounts" element={<MyAccount />} />
                    {loginState?.user.role === "user" && <Route path="/admins/*" element={<WrongPages message={"you don't have admin authorizations"} />} />}
                    <Route path="*" element={<WrongPages message={"404 page not found"} />} />
                </Routes>
            </CartContextProvider>
        </>
    )
}

export default UserRoutes