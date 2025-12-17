import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewPorject({ onAdd, onCancel }) {
  const modal = useRef();
  console.log(modal);
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescrption = description.current.value;
    const enteredDueDate = dueDate.current.value;
    //....validation
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescrption.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescrption,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttomCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forget to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure to provide a valid value for every input field.
        </p>
      </Modal>
      <div>
        <menu className=" w-[35rem] mt-16 flex justify-end items-center gap-4 my-4 ">
          <button
            onClick={() => onCancel()}
            className=" text-stone-800 hover:text-stone-950 "
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-slate-800 text-stone-50 py-2 px-6 rounded-md hover:bg-stone-950"
          >
            Save
          </button>
        </menu>
        <div>
          <Input type="text" ref={title} label="title" />
          <Input ref={description} label="description" textArea />
          <Input type="date" ref={dueDate} label="due date" />
        </div>
      </div>
    </>
  );
}
