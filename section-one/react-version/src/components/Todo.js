import { useState } from 'react';
import { Backdrop } from './Backdrop';
import { Modal } from './Modal';

const Todo = ({ text }) => {
  const [showModal, setShowModal] = useState();

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHander = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={showModalHandler}>
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHander} />}
      {showModal && <Modal text="Are you sure?" onClick={closeModalHander} />}
    </div>
  );
};

export default Todo;
