export const Modal = ({ onClose, text }) => (
  <div className="modal">
    <p>{text}</p>
    <button className="btn btn--alt" onClick={onClose}>
      Cancel
    </button>
    <button className="btn" onClick={onClose}>
      Confirm
    </button>
  </div>
);
