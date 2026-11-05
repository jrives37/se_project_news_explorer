import { useState } from "react";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onSignInClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", { email, username });
  };

  return (
    <div
      className="register-modal"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="register-modal__container">
        <button
          className="register-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close registration"
        >
          ✕
        </button>

        <h2 className="register-modal__title">Sign up</h2>

        <form className="register-modal__form" onSubmit={handleSubmit}>
          <label className="register-modal__label" htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            className="register-modal__input"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="register-modal__label" htmlFor="register-password">
            Password
          </label>
          <input
            id="register-password"
            className="register-modal__input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="register-modal__label" htmlFor="register-username">
            Username
          </label>
          <input
            id="register-username"
            className="register-modal__input"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <button className="register-modal__submit" type="submit">
            Sign up
          </button>
        </form>

        <p className="register-modal__switch">
          or{" "}
          <button type="button" onClick={onSignInClick}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterModal;
