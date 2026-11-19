import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  onClose,
  title,
  buttonText,
  onSubmit,
  children,
  alternateText,
  alternateButtonText,
  onAlternateClick,
  isValid,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal__container">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit} noValidate>
          {children}

          <button className="modal__submit" type="submit" disabled={!isValid}>
            {buttonText}
          </button>
        </form>

        <p className="modal__switch">
          {alternateText}{" "}
          <button type="button" onClick={onAlternateClick}>
            {alternateButtonText}
          </button>
        </p>
      </div>
    </div>
  );
}

export default ModalWithForm;
