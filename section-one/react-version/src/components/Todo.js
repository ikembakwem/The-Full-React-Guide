import { useState } from 'react';
import { Backdrop } from './Backdrop';
import { Modal } from './Modal';

export default function ({ text }) {
  const [showModal, setShowModal] = useState(false);

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHander() {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHander} />}
      {showModal && <Modal text="Are you sure?" onClose={closeModalHander} />}
    </div>
  );
}
