export default function Input({ label, textArea, ...props }) {
    const calsses = 'w-full p-1 rounded-sm border-b-2 border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600'
  return (
    <p className=" flex flex-col gap-1 my-4 " >
      <label className="uppercase text-sm font-bold text-stone-500">{label}</label>
      {textArea ? <textarea className={calsses} {...props} /> : <input className={calsses} {...props} />}
    </p>
  );
}
