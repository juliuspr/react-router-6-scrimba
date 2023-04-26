import React, { useState, useEffect } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.querySelector(".modal");
      if (modal && !modal.contains(event.target)) {
        setShowModal(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div>
      <h1>Example Modal</h1>
      <button onClick={toggleModal}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>Modal Title</h2>
            <p>Modal content goes here.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
