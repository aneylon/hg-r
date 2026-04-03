import { useState } from "react";

const Modal = ({ show = false }) => {
  const [showModal, setShowModal] = useState(show);
  return (
    <div className="modal" style={{ display: showModal ? "block" : "none" }}>
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &times;
        </span>
        <h1>Modal</h1>
        <p>
          Modal Text Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laborum animi nemo ullam voluptate molestiae necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default Modal;
