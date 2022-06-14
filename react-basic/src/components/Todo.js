import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

// const todoList = [
//   {
//     task: `Wash clothes`,
//     time: `12pm`,
//     place: `washing machine`,
//   },
//   {
//     task: `Eat lunch`,
//     time: `2pm`,
//     place: `dinning table`,
//   },
//   {
//     task: `Coding`,
//     time: `3pm`,
//     place: `desk`,
//   },
// ];

export default function Todo(props) {
  const [curItem, setCurItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [todoList, setToDoList] = useState([
    { id: 1, task: `Wash clothes`, time: `12pm`, place: `washing machine` },
    { id: 2, task: `Eat lunch`, time: `2pm`, place: `dinning table` },
    { id: 3, task: `Coding`, time: `3pm`, place: `desk` },
  ]);

  function clickBtn() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  function taskDone() {
    closeModal();
  }
  return todoList.map((cur) => (
    <div key={cur.task}>
      <div className="card">
        <h2>{cur.task}</h2>
        <p>Time = {cur.time}</p>
        <p>Place = {cur.place}</p>
        <div className="actions">
          <button className="btn" onClick={() => clickBtn(cur)}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModal} onConfirm={() => taskDone(cur)} />
      ) : null}
      {modalIsOpen ? <Backdrop onClick={closeModal} /> : null}
    </div>
  ));
}
