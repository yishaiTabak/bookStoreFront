import React, { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Navigate } from "react-router-dom";
import { deleteUser, editUser } from "../../server/userRequests";

import UserForm from "../formComponents/UserForm";
import DeleteAccountBtn from "./deleteAccountBtn/DeleteAccountBtn";
import { validateFuncsForEdit } from "../../utils/userFormUtils";
import AccountUpdatedModal from "./accountUpdatedModal/AccountUpdatedModal";
import AccountDeletedModal from "./accountDeletedModal/AccountDeletedModal";

const MyAccount = () => {
  const { loginState } = useContext(LoginContext);
  const [isUpdateModalHidden, setIsUpdateModalHidden] = useState(true);
  const [isDeletedModalHidden, setIsDeletedModalHidden] = useState(true);

  const showDeletedModal = () => {
    setIsDeletedModalHidden(false);
  };

  const showModal = () => {
    setIsUpdateModalHidden(false);
  };

  const formData = {
    title: "edit details",
    submitText: "save changes",
    formRequest: editUser,
    showModal,
    validateFuncs: validateFuncsForEdit,
    initIsInputsValid: true,
    handleCart: () => {},
  };

  return !loginState ? (
    <Navigate to="/login" replace />
  ) : (
    <div className="accounts-page">
      <h1 className="accounts-title">
        Hello {loginState.user?.username}
      </h1>
      <div className="accounts-container">
        <div className="edit-container">
          <UserForm data={formData} />
          <DeleteAccountBtn
            deleteRequest= {deleteUser}
            showDeletedModal={showDeletedModal}
          />
        </div>
      </div>
      {!isUpdateModalHidden && <AccountUpdatedModal setModal={()=>setIsUpdateModalHidden(true)} />}
      {!isDeletedModalHidden && <AccountDeletedModal />}
    </div>
  );
};

export default MyAccount;
