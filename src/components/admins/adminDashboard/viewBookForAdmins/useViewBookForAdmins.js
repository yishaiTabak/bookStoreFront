import { useContext, useState } from "react";
import { LoginContext } from "../../../../context/LoginContext";
import { editBook } from "../../../../server/booksRequests";

const useViewBookForAdmins = (bookDetails) =>{
    const { loginState } = useContext(LoginContext);

    const [isSuccessfullEditModal, setIsSuccessfullEditModal] = useState(false);
    const [isEditModalHidden, setIsEditModalHidden] = useState(true);
    const [isDeleteModalHidden, setIsDeleteModalHidden] = useState(true);
  
    const onDiscount = async (event) => {
      event.preventDefault();
      const value = parseInt(event.target.children[0].value);
      event.target.children[0].value = "";
  
      if (!value) return;
  
      await editBook({ discount: value }, loginState.token, bookDetails._id);
      bookDetails.discount = value;
      setIsSuccessfullEditModal(true);
    };
    
    const onEdit = () => {
      setIsEditModalHidden(false);
    };
  
    const onCloseSuccessfullEditModal = () => {
      setIsEditModalHidden(true);
      setIsSuccessfullEditModal(false);
    };

    return {
        isSuccessfullEditModal,
        isEditModalHidden,
        isDeleteModalHidden,
        onDiscount,
        onEdit,
        onCloseSuccessfullEditModal,
        setIsEditModalHidden,
        setIsDeleteModalHidden,
        setIsSuccessfullEditModal
      };
}

export default useViewBookForAdmins