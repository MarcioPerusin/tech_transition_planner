// src/components/common/Modal/Modal.jsx
import { useEffect, useId, useRef } from "react";
import { FaTimes } from "react-icons/fa";

import "./Modal.css";

function Modal({
  isOpen,
  title,
  children,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmVariant = "primary",
  onConfirm,
  onClose,
}) {
  const titleId = useId();
  const contentId = useId();

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    previouslyFocusedElementRef.current = document.activeElement;

    const previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;

      previouslyFocusedElementRef.current?.focus();
    };
  }, [isOpen]);

  const handleModalKeyDown = (event) => {
    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = modalRef.current?.querySelectorAll(
      [
        "button:not([disabled])",
        "a[href]",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        '[tabindex]:not([tabindex="-1"])',
      ].join(","),
    );

    if (!focusableElements?.length) {
      return;
    }

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstFocusableElement) {
      event.preventDefault();
      lastFocusableElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastFocusableElement) {
      event.preventDefault();
      firstFocusableElement.focus();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <button
        className="modal__overlay"
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        className="modal__container"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={contentId}
        onKeyDown={handleModalKeyDown}
      >
        <div className="modal__header">
          <h2 className="modal__title" id={titleId}>
            {title}
          </h2>

          <button
            className="modal__close-button"
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>

        <div className="modal__content" id={contentId}>
          {children}
        </div>

        <div className="modal__actions">
          <button
            className="modal__button modal__button--cancel"
            type="button"
            onClick={onClose}
          >
            {cancelLabel}
          </button>

          <button
            className={`modal__button modal__button--${confirmVariant}`}
            type="button"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
