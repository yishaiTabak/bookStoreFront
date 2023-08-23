import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import {
  composeUpdateRequest,
  errorMessages,
  handleUserData,
} from "../../utils/userFormUtils";

const useUserForm = (
  validateFuncs,
  initIsInputsValid,
  handleCart,
  formRequest,
  showModal
) => {
  const { loginState, setLoginState } = useContext(LoginContext);

  const [invalidMessages, setInvalidMessages] = useState(["", "", ""]);
  const [isInputsValid, setIsInputsValid] = useState([
    initIsInputsValid,
    initIsInputsValid,
    initIsInputsValid,
  ]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormInvalid = () => {
    return (
      isInputsValid.includes(false) ||
      (username === "" && email === "" && password === "")
    );
  };

  const setStates = (
    value,
    isValidInput,
    inputIndex,
    setValue,
    invalidMessage
  ) => {
    const newInputsValid = [...isInputsValid];
    newInputsValid[inputIndex] = isValidInput;
    const newInvalidMessages = [...invalidMessages];
    newInvalidMessages[inputIndex] = isValidInput ? "" : invalidMessage;

    setIsInputsValid(newInputsValid);
    setInvalidMessages(newInvalidMessages);
    setValue(value);
  };

  const onInputBlur = (event, index, setValue) => {
    const newValue = event.target.value.trim();
    const isValidValue = validateFuncs[index](newValue);
    setStates(newValue, isValidValue, index, setValue, errorMessages[index]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const objToSend = composeUpdateRequest(username, email, password);

    const userData = await formRequest(objToSend, loginState?.token);
    if (!userData) {
      const newEmail = email;
      setStates(newEmail, false, 1, setEmail, "email already exist");
    } else {
      handleUserData(userData, setLoginState, handleCart);
      showModal();
    }
  };

  return {
    onSubmit,
    onInputBlur,
    isFormInvalid,
    setUsername,
    setEmail,
    setPassword,
    invalidMessages,
  };
};

export default useUserForm;
