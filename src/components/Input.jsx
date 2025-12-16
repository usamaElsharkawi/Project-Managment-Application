import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textArea, ...props },ref) {
  const calsses =
    "w-full p-1 rounded-sm border-b-2 border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600";
  return (
    <p className=" flex flex-col gap-1 my-4 ">
      <label className="uppercase text-sm font-bold text-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref} className={calsses} {...props} />
      ) : (
        <input ref={ref} className={calsses} {...props} />
      )}
    </p>
  );
});

export default Input;