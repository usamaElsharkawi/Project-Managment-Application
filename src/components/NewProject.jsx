import { useRef } from "react";
import Input from "./Input";
export default function NewPorject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescrption = description.current.value;
    const enteredDueDate = dueDate.current.value;
    //....validation
    onAdd({
      title: enteredTitle,
      description: enteredDescrption,
      dueDate: enteredDueDate,
    });
  }
  return (
    <div>
      <menu className=" w-[35rem] mt-16 flex justify-end items-center gap-4 my-4 ">
        <button className=" text-stone-800 hover:text-stone-950 ">
          Cancel
        </button>
        <button onClick={handleSave} className="bg-slate-800 text-stone-50 py-2 px-6 rounded-md hover:bg-stone-950">
          Save
        </button>
      </menu>
      <div>
        <Input type='text' ref={title} label="title" />
        <Input ref={description} label="description" textArea />
        <Input type='date' ref={dueDate} label="due date" />
      </div>
    </div>
  );
}
