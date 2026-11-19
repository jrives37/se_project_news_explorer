import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSignInClick, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [touched, setTouched] = useState({});

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 8;
  const usernameValid = username.trim().length >= 2;
  const isValid = emailValid && passwordValid && usernameValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      password: true,
      username: true,
    });

    if (!isValid) {
      return;
    }

    onRegister();
    setEmail("");
    setPassword("");
    setUsername("");
    setTouched({});
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up"
      buttonText="Sign up"
      onSubmit={handleSubmit}
      isValid={isValid}
      alternateText="or"
      alternateButtonText="Sign in"
      onAlternateClick={onSignInClick}
    >
      <label className="modal__label" htmlFor="register-email">
        Email
      </label>
      <input
        id="register-email"
        className={`modal__input ${
          touched.email && !emailValid ? "modal__input_error" : ""
        }`}
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
      />
      <span className="modal__error">
        {touched.email && !emailValid
          ? "Please enter a valid email address"
          : ""}
      </span>

      <label className="modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        id="register-password"
        className={`modal__input ${
          touched.password && !passwordValid ? "modal__input_error" : ""
        }`}
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
      />
      <span className="modal__error">
        {touched.password && !passwordValid
          ? "Password must be at least 8 characters"
          : ""}
      </span>

      <label className="modal__label" htmlFor="register-username">
        Username
      </label>
      <input
        id="register-username"
        className={`modal__input ${
          touched.username && !usernameValid ? "modal__input_error" : ""
        }`}
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onBlur={() => setTouched((prev) => ({ ...prev, username: true }))}
      />
      <span className="modal__error">
        {touched.username && !usernameValid
          ? "Username must be at least 2 characters"
          : ""}
      </span>
    </ModalWithForm>
  );
}

export default RegisterModal;
