import { useState } from "react";

const Modal = ({ show = false, header, body, showClose = true }) => {
  const [showModal, setShowModal] = useState(show);
  return (
    <div className="modal" style={{ display: showModal ? "block" : "none" }}>
      <div className="modal-content">
        {showClose && (
          <span
            className="close"
            onClick={() => {
              setShowModal(false);
            }}
          >
            &times;
          </span>
        )}
        <div className="modalHeader">
          <h1>{header}</h1>
        </div>
        <div className="modalBody">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
