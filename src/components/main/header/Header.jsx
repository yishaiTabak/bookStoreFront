import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../../context/LoginContext";
import { deleteUserFromCookie } from "../../../cookies/cookies";
import { logout } from "../../../server/userRequests";
import HeaderContainer from "../../headerContainer/HeaderContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { getAllBookNames } from "../../../server/booksRequests";
import Search from "./search/Search";

const Header = () => {
  const { loginState, setLoginState } = useContext(LoginContext);
  const [bookNames, setBookNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newBookNames = await getAllBookNames();
      setBookNames(newBookNames);
    };

    fetchData();
  }, []);

  const onLogout = async () => {
    await logout(loginState.token);
    setLoginState(null);
    deleteUserFromCookie();
  };

  return (
    <HeaderContainer>
      <div className="header-nav">
        {!loginState ? (
          <NavLink to="/login" className="header-link">
            Login
          </NavLink>
        ) : (
          <NavLink onClick={onLogout} to="/home" className="header-link logout">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size="lg"
              rotation={180}
            />
          </NavLink>
        )}

        <NavLink to="/home" className="header-link">
          Home
        </NavLink>

        {loginState && (
          <NavLink to="/accounts" className="header-link">
            My Account
          </NavLink>
        )}
        <Search bookNames={bookNames} />

        <NavLink to="/cart" className="header-link">
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
        </NavLink>
      </div>
    </HeaderContainer>
  );
};

export default Header;
