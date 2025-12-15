import Input from "./Input"
export default function NewPorject(){
    return <div>
        <menu className=" w-[35rem] mt-16 flex justify-end items-center gap-4 my-4 " >
            <button className=" text-stone-800 hover:text-stone-950 " >Cancel</button>
            <button className="bg-slate-800 text-stone-50 py-2 px-6 rounded-md hover:bg-stone-950" >Save</button>
        </menu>
        <div>
            <Input label='title'/>
            <Input label='description' textArea />
            <Input label='due date'/>
        </div>
    </div>
}