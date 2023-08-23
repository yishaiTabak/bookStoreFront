import { saveUserOnCookie } from "../cookies/cookies";
import validator from "validator";

export const errorMessages = [
  "the username must contain at least 2 characters",
  "you must enter valid email",
  "the password must contain at least 8 characters, capital letter,lower,number and unique simbol",
];

export const composeUpdateRequest = (username, email, password) => {
  const objToSend = {};
  if (username !== "") objToSend.username = username;
  if (email !== "") objToSend.email = email;
  if (password !== "") objToSend.password = password;
  return objToSend;
};

export const handleUserData = async (userData, setLoginState, handleCart) => {
  await handleCart(userData);
  setLoginState(userData);
  saveUserOnCookie(userData);
};

export const validateFuncsForRegistration = [
  (name) => name.length > 1,
  validator.isEmail,
  validator.isStrongPassword,
];

export const validateFuncsForEdit = [
  (name) => {
    return name.length > 1 || name === "";
  },
  (email) => validator.isEmail(email) || email === "",
  (password) => validator.isStrongPassword(password) || password === "",
];
