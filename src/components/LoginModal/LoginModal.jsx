import { useState } from "react";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onSignUpClick, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div
      className="login-modal"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="login-modal__container">
        <button
          className="login-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close login"
        >
          ✕
        </button>

        <h2 className="login-modal__title">Sign in</h2>

        <form className="login-modal__form" onSubmit={handleSubmit}>
          <label className="login-modal__label" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            className="login-modal__input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-modal__label" htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
            className="login-modal__input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-modal__submit" type="submit">
            Sign in
          </button>
        </form>
        <p className="login-modal__switch">
          or{" "}
          <button type="button" onClick={onSignUpClick}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
