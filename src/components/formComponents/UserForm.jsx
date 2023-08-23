import React from "react";

import useUserForm from "./useUserForm";

const UserForm = ({ data }) => {
  const {
    title,
    submitText,
    formRequest,
    showModal,
    validateFuncs,
    initIsInputsValid,
    handleCart,
  } = data;

  const {
    onSubmit,
    onInputBlur,
    isFormInvalid,
    setUsername,
    setEmail,
    setPassword,
    invalidMessages,
  } = useUserForm(
    validateFuncs,
    initIsInputsValid,
    handleCart,
    formRequest,
    showModal
  );

  return (
    <form className="user-form" onSubmit={onSubmit}>
      <h2 className="user-form-title">{title}</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="username"
          className="input"
          onBlur={(event) => onInputBlur(event, 0, setUsername)}
        />
        {invalidMessages[0] !== "" && (
          <div className="invalid-message">{invalidMessages[0]}</div>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="email"
          className="input"
          onBlur={(event) => onInputBlur(event, 1, setEmail)}
        />
        {invalidMessages[1] !== "" && (
          <div className="invalid-message">{invalidMessages[1]}</div>
        )}
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="password"
          className="input"
          onBlur={(event) => onInputBlur(event, 2, setPassword)}
        />
        {invalidMessages[2] !== "" && (
          <div className="invalid-message">{invalidMessages[2]}</div>
        )}
      </div>
      <button
        type="submit"
        className="user-form-submit"
        disabled={isFormInvalid()}
      >
        {submitText}
      </button>
    </form>
  );
};

export default UserForm;
