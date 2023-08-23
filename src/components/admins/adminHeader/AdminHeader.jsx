import React, { useContext } from "react";
import HeaderContainer from "../../headerContainer/HeaderContainer";
import { LoginContext } from "../../../context/LoginContext";
import { NavLink, useNavigate } from "react-router-dom";
import { deleteUserFromCookie } from "../../../cookies/cookies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../../server/userRequests";

const AdminHeader = () => {
  const { loginState, setLoginState } = useContext(LoginContext);

  const navigate = useNavigate()
  const onLogout = async () => {
    await logout(loginState.token);
    setLoginState(null);
    deleteUserFromCookie();
    navigate('/home')
  };
  return (
    <HeaderContainer>
      {loginState && <div className="admin-header-nav">
          <div
            onClick={onLogout}
            className="header-link left-corner"
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size="lg"
              rotation={180}
            />
          </div>
        <NavLink to="/admins/dashboard" className="header-link">
          dashboard
        </NavLink>
          <NavLink to="/admins/accounts" className="header-link">
            My Account
          </NavLink>
      </div>}
    </HeaderContainer>
  );
};

export default AdminHeader;
