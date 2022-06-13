import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function clickDelete() {
    setModalIsOpen(true);
  }
  function cancelDelete() {
    setModalIsOpen(false);
  }
  function confirmDelete() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={clickDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={cancelDelete} onConfirm={confirmDelete} />
      ) : null}
      {modalIsOpen ? <Backdrop onCancel={cancelDelete} /> : null}
    </div>
  );
}

export default Todo;
