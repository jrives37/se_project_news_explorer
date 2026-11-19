import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSignUpClick, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({});

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 8;
  const isValid = emailValid && passwordValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!isValid) {
      return;
    }

    onLogin();
    setEmail("");
    setPassword("");
    setTouched({});
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign in"
      buttonText="Sign in"
      onSubmit={handleSubmit}
      isValid={isValid}
      alternateText="or"
      alternateButtonText="Sign up"
      onAlternateClick={onSignUpClick}
    >
      <label className="modal__label" htmlFor="login-email">
        Email
      </label>
      <input
        id="login-email"
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

      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        id="login-password"
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
    </ModalWithForm>
  );
}

export default LoginModal;
